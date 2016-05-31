/// <reference path="users.ts" />
/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
/// <reference path="typings/index.d.ts" />
"use strict";
var userData = require('./users');
var chai = require('chai');
var expect = chai.expect;
var userInfo = new userData.UserDB();
describe("Get existing user", function () {
    it("should return user", function () {
        var user = userInfo.read(0);
        console.log(user);
        expect(user).to.eql({ id: 0, firstname: 'first', lastname: 'last', age: 42 });
    });
});
describe("Get non-existing user", function () {
    it("should return null", function () {
        var user = userInfo.read(5);
        console.log(user);
        expect(user).to.eql(null);
    });
});
describe("Create user", function () {
    it("should return user", function () {
        var user = userInfo.create({ firstname: 'Sachin', lastname: 'Aggarwal', age: 21 });
        console.log(user);
        expect(user).to.eql({ id: 1, firstname: 'Sachin', lastname: 'Aggarwal', age: 21 });
    });
});
describe("Create user without name", function () {
    it("should return null", function () {
        var user = userInfo.create({ firstname: '', lastname: 'Aggarwal', age: 21 });
        console.log(user);
        expect(user).to.eql(null);
    });
});
describe("Create user without age", function () {
    it("should return null", function () {
        var user = userInfo.create({ firstname: 'Sachin', lastname: 'Aggarwal', age: null });
        console.log(user);
        expect(user).to.eql(null);
    });
});
describe("Update existing user", function () {
    it("should return true", function () {
        var user = userInfo.update({ id: 1, firstname: 'Sachin', lastname: 'Aggarwal', age: 21 });
        console.log(user);
        expect(user).to.eql(true);
    });
});
describe("Update non-existing user", function () {
    it("should return false", function () {
        var user = userInfo.update({ id: 10, firstname: 'Sachin', lastname: 'Aggarwal', age: 21 });
        console.log(user);
        expect(user).to.eql(false);
    });
});
describe("Delete existing user", function () {
    it("should return true", function () {
        var user = userInfo.delete(1);
        console.log(user);
        expect(user).to.eql(true);
    });
});
describe("Update non-existing user", function () {
    it("should return false", function () {
        var user = userInfo.delete(10);
        console.log(user);
        expect(user).to.eql(false);
    });
});
//# sourceMappingURL=users.test.js.map