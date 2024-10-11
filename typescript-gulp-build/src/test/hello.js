"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayHello = void 0;
var SayHello = /** @class */ (function () {
    function SayHello() {
    }
    SayHello.prototype.sayHello = function (name) {
        console.log("Hello ".concat(name));
    };
    return SayHello;
}());
exports.SayHello = SayHello;
