"use strict";
function add(a, b) {
    return a + b;
}
console.log((add(2, 3)));
const subtract = (num1, num2) => num1 - num2;
console.log((subtract(2, 3)));
const mult = function (num1, num2) {
    return num1 * num2;
};
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log((add2(2, 3, ...numbers)));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
