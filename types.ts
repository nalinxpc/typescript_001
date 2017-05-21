// let mystring : string;
// let mynumber : number;
// let mybool : boolean;
// let myany: any;

// let myarray :string[];
// let numarray:Array<number>;

// //tuple predefined Array
// let mytuple:[string, number, string];

// mynumber  =23;
// mybool = true;
// myany = false;
// myarray = ["rt","rtef"];
// numarray = [34,23,234,3,545];
// mytuple = ["sdf",34,"dfgsdf"];
// console.log(mytuple);

class User{
    name:string;
    age:number;

    constructor(name:string,age:number)
    {
        this.name = name;
        this.age = age;
        console.log("hi " + this.name);
    }
}

let usr = new User("rajith",23);