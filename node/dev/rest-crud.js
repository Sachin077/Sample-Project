/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
/// <reference path="typings/index.d.ts" />
/// <reference path="in-memory-dao.ts" />
"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var DAO = require('./in-memory-dao');
// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8888;
var router = express.Router();
var userDAO = new DAO.InMemoryUserDAO();
router.get('/', function (req, res) {
    res.json(userDAO.read(req.query.id));
});
router.post('/', function (req, res) {
    res.json(userDAO.create(req.body));
});
router.put('/', function (req, res) {
    res.json({ result: userDAO.update(req.body) });
});
router.delete('/', function (req, res) {
    res.json({ result: userDAO.delete(req.query.id) });
});
// prefixed all routes with /api
app.use('/api', router);
app.listen(port);
console.log('http://127.0.0.1:' + port + '/api');
//# sourceMappingURL=rest-crud.js.map