"use strict";
let lname;
lname = "Florin";
let newName = lname.toUpperCase();
console.log(newName);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["hello", "guys", "how", "are", "you"];
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbers;
function swapNum(num1, num2) {
    return [num2, num1];
}
swapNumbers = swapNum(10, 20);
swapNumbers[0];
let department;
