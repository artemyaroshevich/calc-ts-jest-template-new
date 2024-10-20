import {name} from "ts-jest/dist/transformers/hoist-jest";

export class UserBase {

    name:string
    surname:string
    age:number
    personalCode:string
    phone:string
    address:string
    mobileIDAuthorization:undefined | boolean

    constructor(name: string, surname: string, age: number, personalCode: string, phone: string, address: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.personalCode = personalCode;
        this.phone = phone;
        this.address = address;
    }
}