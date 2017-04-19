'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var request = require('request');
var urljoin = require('url-join');

var port = (process.env.PORT || 16778);
var baseAPI = "/api/v1";

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get(baseAPI + "/contacts", (request, response) => {
    console.log("GET /contacts"); 

    var url = urljoin('https://aws2017-staging.herokuapp.com', baseAPI, '/contacts', '?apikey=1234abcd');
    request.get('http://www.google.com', (error, resp, body) => {
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
