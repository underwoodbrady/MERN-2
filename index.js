const express = require("express"),
    app = express(),
    https = require("https"),
    fs = require("fs"),
    serv = require('http').Server(app),
    path = require('path');

/* HTTPS Stuff
const privateKey = fs.readFileSync("cert/localhost-key.pem", "utf8");
const certificate = fs.readFileSync("cert/localhost.pem", "utf8");

const credentials = {
    key: privateKey,
    cert: certificate,
};
let httpsServ = https.Server(credentials, app);
/*End of HTTPS Stuff*/

let PORT = process.env.PORT || 2020;

//let index = require("./routes/index.js");

//app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

serv.listen(PORT);

/*
httpsServ.listen(PORT + 1, () =>
    console.log(`Server running on port: ${PORT + 1} (https)`)
);
*/
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




