const express = require("express"),
    app = express(),
    serv = require('http').Server(app),
    path = require('path');


let PORT = process.env.PORT || 2020;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

serv.listen(PORT);

let io = require("socket.io")(serv, {});

let serverCount = 0;

let SOCKET_LIST = [];

io.on("connection", (socket) => {
    SOCKET_LIST.push(socket);

    console.log("New client connected");

    socket.emit("newValue", { count: serverCount });

    socket.on("updateValue", (newVal) => {
        serverCount = serverCount + newVal;
        for (let i = 0; i < SOCKET_LIST.length; i++)
            SOCKET_LIST[i].emit("newValue", { count: serverCount });
    });

    socket.on("disconnect", function () {
        SOCKET_LIST.splice(socket, 1);
    });
});




