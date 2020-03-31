"use strict";
// import { vehicle } from './access';
exports.__esModule = true;
var classDemo = /** @class */ (function () {
    function classDemo(username, password, ssn) {
        this.username = username;
        this.password = password;
        this.ssn = ssn;
    }
    classDemo.prototype.getUsername = function () {
        return this.username; //username property of the class
    };
    classDemo.prototype.setUsername = function (username) {
        this.username = username; //set username property to one name
    };
    classDemo.prototype.getPassword = function () {
        return this.password;
    };
    classDemo.prototype.setPassword = function (password) {
        this.password = password;
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    classDemo.prototype.setSSN = function (ssn) {
        this.ssn = ssn;
    };
    return classDemo;
}());
exports.classDemo = classDemo;
//create object of the class, and using that object call the methods or properties present in that class
var user1 = new classDemo("Jimmy", "Passw0rd!", 1234567);
console.log(user1);
