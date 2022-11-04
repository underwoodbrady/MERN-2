const express = require("express"),
    app = express(),
    https = require("https"),
    fs = require("fs"),
    path = require('path');

/* HTTPS Stuff*/
const privateKey = fs.readFileSync("cert/localhost-key.pem", "utf8");
const certificate = fs.readFileSync("cert/localhost.pem", "utf8");

const credentials = {
    key: privateKey,
    cert: certificate,
};
let httpsServ = https.Server(credentials, app);
/*End of HTTPS Stuff*/

let PORT = process.env.PORT | 2020;

//let index = require("./routes/index.js");

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

