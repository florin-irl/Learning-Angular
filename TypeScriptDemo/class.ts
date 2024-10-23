import {Login, User} from './interface';

class Employee implements Login{
    #id: number;

    protected name: string;

    address: string;

    constructor(id: number, name: string, address: string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): string{
        return this.name + ", " + this.address;
    }

    static getEmployeeCount(): number{
        return 100;
    }

    Login(): User{
        return {name: this.name, id: this.#id, email: ""};
    }

}

class Manager extends Employee{
    constructor(id: number, name: string, address: string){
        super(id, name, address);
    }

    getNameWithAddress(): string{
        return super.getNameWithAddress();
    }
}

let john = new Employee(1, "John", "New York");

console.log(john);