!function e(t,n,o){function r(u,c){if(!n[u]){if(!t[u]){var l="function"==typeof require&&require;if(!c&&l)return l(u,!0);if(i)return i(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var a=n[u]={exports:{}};t[u][0].call(a.exports,(function(e){return r(t[u][1][e]||e)}),a,a.exports,e,t,n,o)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("./test/hello"),r=e("./test/greetings"),i=new function(e,t){this.name=e,this.id=t}("Murali",1001);console.log("User - id: ".concat(i.id,", name: ").concat(i.name)),(new o.SayHello).sayHello(i.name),(new r.Greetings).greet(i.name)},{"./test/greetings":2,"./test/hello":3}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Greetings=void 0;var o=function(){function e(){}return e.prototype.greet=function(e){console.log("Welcome user ".concat(e))},e}();n.Greetings=o},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.SayHello=void 0;var o=function(){function e(){}return e.prototype.sayHello=function(e){console.log("Hello ".concat(e))},e}();n.SayHello=o},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
