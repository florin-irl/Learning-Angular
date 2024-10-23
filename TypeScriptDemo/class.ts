class Employee{
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