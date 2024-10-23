interface User{
    name: string;
    age?: number;
    id: Number;
    email:String;
}


let user : User = { name: "John", age: 30, id: 1, email: ""};

interface Employees extends User{
    salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000};

export interface Login{
    Login(): User;
}