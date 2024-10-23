function add(a : number, b : number ) : number {
    return a + b;
}

console.log((add(2,3)))

const subtract = (num1:number,num2:number) : number => num1 - num2;

console.log((subtract(2,3)))

const mult = function ( num1: number, num2:number): number{
    return num1*num2;
}

function add2(num1: number, num2:number,...num3:number[]):number{
    return num1 + num2 + num3.reduce((a,b)=> a+b,0);
}

let numbers = [1,2,3,4,5];

console.log((add2(2,3,...numbers)));

function getItems<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);

let concatString = getItems<string>(["a","b","c","d","e"]);



