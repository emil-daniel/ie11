"use strict";

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var errorEl = document.querySelector('#error');
var rootEl = document.querySelector('#root'); // Arrow function example

var myArr = [1, 2, 3];
myArr.map(function (n) {
  return n + 1;
});
var text1 = document.createElement("div");
text1.innerHTML = "Arrow function";
rootEl.appendChild(text1); // Template Strings

var name = "Bob";
var time = "today";
var helloText = "Hello ".concat(name, ", how are you ").concat(time, "?");
var text2 = document.createElement("div");
text2.innerHTML = "Template Strings";
rootEl.appendChild(text2); // Destructuring

var a = 1,
    b = 2;
var text3 = document.createElement("div");
text3.innerHTML = "Destructuring";
rootEl.appendChild(text3); // Maps

var m = new Map();
m.set("hello", 42);
var text4 = document.createElement("div");
text4.innerHTML = "Maps";
rootEl.appendChild(text4); // Promises

function timeout() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, duration);
  });
}

var text5 = document.createElement("div");
text5.innerHTML = "Promises";
rootEl.appendChild(text5);
errorEl.remove();