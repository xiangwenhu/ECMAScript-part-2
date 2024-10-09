class ClassTest extends null {
    constructor() {
        return Object.create(null)
    }
}

const classTest = new ClassTest();

console.log("ownKeys:", Reflect.ownKeys(classTest))

