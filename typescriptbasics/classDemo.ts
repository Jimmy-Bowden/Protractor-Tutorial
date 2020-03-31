// import { vehicle } from './access';

export class classDemo {

    //properties,methods,constructor
    username: string;
    password: string;
    ssn: number;

    constructor(username: string, password: string, ssn: number) {
        this.username = username;
        this.password = password;
        this.ssn = ssn;
    }

    getUsername():string {
        return this.username;//username property of the class
    }

    setUsername(username: string) {
        this.username = username;      //set username property to one name
    }

    getPassword():string {
        return this.password;
    }

    setPassword(password:string) {
        this.password = password;
    }

    getSSN() {
        return this.ssn;
    }

    setSSN(ssn:number) {
        this.ssn = ssn
    }




}
//create object of the class, and using that object call the methods or properties present in that class

let user1 = new classDemo("Jimmy", "Passw0rd!", 1234567);
console.log(user1);



