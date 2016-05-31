"use strict";
var userData = require('../deve-test/users');
var userInfo = new userData.UserDB();
exports['update'] = function (test) {
    test.equal(userInfo.update({id: 0, firstname: 'first', lastname: 'last', age: 42}), true);
    test.done();
};

exports['add_user'] = function (test) {
    test.equal(userInfo.create({firstname: 'first', lastname: 'last', age: 42}), {id: 1, firstname: 'first', lastname: 'last', age: 42});
    test.done();
};