"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greetings = void 0;
var Greetings = /** @class */ (function () {
    function Greetings() {
    }
    Greetings.prototype.greet = function (name) {
        console.log("Welcome user ".concat(name));
    };
    return Greetings;
}());
exports.Greetings = Greetings;
