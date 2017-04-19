'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var contactsResource = require('./contactsResource.js');
var request = require('request').defaults({json: true});

var port = (process.env.PORT || 16778);
var baseAPI = "/api/v1";





var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get(baseAPI + "/contacts", (req, response) => {
    console.log("GET /contacts"); 

    request.get(contactsResource("/contacts"), (error, resp, body) => {
        if (error) {
            console.log('error:'+error);
            response.sendStatus(500);
        } else {
            response.send(body);
        }
    });
});



app.listen(port, () => {
    console.log("Server with GUI up and running!!");
});
