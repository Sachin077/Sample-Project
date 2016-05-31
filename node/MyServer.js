/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
/// <reference path="typings/index.d.ts" />
"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/index.htm', function (req, res) {
    res.sendFile(__dirname + "/index.htm");
});
app.post('/add_user', urlencodedParser, function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var count = Object.keys(data).length + 1;
        var response = {
            "name": req.body.name,
            "password": req.body.password,
            "profession": req.body.profession,
            "id": count
        };
        data["user" + count.toString()] = response;
        fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        console.log(data);
        res.end(JSON.stringify(data));
    });
});
app.get('/get_user', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        var user = users["user" + req.query.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
