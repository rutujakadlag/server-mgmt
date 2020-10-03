const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3000;
const cors =  require("cors");      

const serverGroups = require('./src/app/config/default.json');

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req,res) => {
    res.send(serverGroups);
});

app.post('/printDetails', (req,res) => {
    let server = req.body;
    console.log('**************************************************************************************')
    console.log('Selected server details are as follows :')
    console.log(`IP address of server : ${server.ip}`);
    console.log(`Group name of server : ${server.name}`);
    console.log(`Path of server : ${server.path}`);
    console.log('**************************************************************************************')
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});