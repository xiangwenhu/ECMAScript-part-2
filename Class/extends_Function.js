
function Animal(name){
    this.name = name;
}

class Person extends Animal {
    constructor(name, age){
        super(name)
        this.age = age;
    }
}

const p = new Person("Tom", 18);

console.log("p:", p);