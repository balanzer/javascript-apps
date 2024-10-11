"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./test/hello");
var greetings_1 = require("./test/greetings");
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murali", 1001);
console.log("User - id: ".concat(user.id, ", name: ").concat(user.name));
new hello_1.SayHello().sayHello(user.name);
new greetings_1.Greetings().greet(user.name);
