let lname : string;

lname = "Florin";

let newName = lname.toUpperCase();

console.log(newName);

let age : number;

age = 25;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

let isValid : boolean = false;

console.log(isValid);

let empList : string[];

empList = ["hello","guys","how","are","you"]

let numList : Array<number>;

numList = [1,2,3,4,5]

let results = numList.filter((num)=> num>2);


let sum = numList.reduce((acc, num) => acc + num);

console.log(results);

console.log(sum);

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

let swapNumbers: [number,number];

function swapNum(num1:number ,num2: number):[number,number]{ 
    return [num2,num1]
}

swapNumbers = swapNum(10,20);

swapNumbers[0];

let department: any;