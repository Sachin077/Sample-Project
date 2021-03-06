/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
/// <reference path="typings/index.d.ts" />
/// <reference path="users.ts" />
"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var userData = require('./users');
var app = express();
var port = process.env.PORT || 8888;
var router = express.Router();
var user = new userData.UserDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/index.htm', function (req, res) {
    res.sendFile(__dirname + "/index.htm");
});
router.post('/add_user', function (req, res) {
    res.json(user.create(req.body));
});
router.get('/get_user', function (req, res) {
    res.json(user.read(req.query.id));
});
router.put('/', function (req, res) {
    res.json({ result: user.update(req.body) });
});
router.delete('/', function (req, res) {
    res.json({ result: user.delete(req.query.id) });
});
// prefixed all routes with /api
app.use('/api', router);
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
//# sourceMappingURL=MyUserServer.js.map