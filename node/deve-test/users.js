/// <reference path="userDAO.ts" />
"use strict";
var UserDB = (function () {
    function UserDB() {
        this.id = 1;
        this.users = {
            0: { id: 0, firstname: 'first', lastname: 'last', age: 42 }
        };
    }
    UserDB.prototype.create = function (user) {
        if (user.firstname == "" || !user.age) {
            return null;
        }
        user.id = this.id;
        this.id++;
        this.users[user.id] = user;
        return user;
    };
    UserDB.prototype.read = function (id) {
        if (!this.users[id]) {
            return null;
        }
        return this.users[id];
    };
    UserDB.prototype.update = function (user) {
        if (!this.users[user.id]) {
            return false;
        }
        this.users[user.id] = user;
        return true;
    };
    UserDB.prototype.delete = function (id) {
        if (!this.users[id]) {
            return false;
        }
        this.users[id] = null;
        return true;
    };
    return UserDB;
}());
exports.UserDB = UserDB;
//# sourceMappingURL=users.js.map