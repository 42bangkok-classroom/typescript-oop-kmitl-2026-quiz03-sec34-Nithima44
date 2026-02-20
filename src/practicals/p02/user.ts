export class User {
    static BIRTH_YEAR = 2000;
    firstname?: string;
    lastname?: string
    private age?: number;

    setFirstname(firstname: string) {
        this.firstname = firstname;
    }
    setLastname(Lastname: string) {
        this.lastname = Lastname;
    }
    setAge(age: number) {
        this.age = age;
    }
    getAge(){
        return this.age;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}
