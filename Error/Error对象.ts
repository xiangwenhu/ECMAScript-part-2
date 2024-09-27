const errorNames = Reflect.ownKeys(globalThis).filter(key => {
    if(typeof key == "string" 
       &&  key.endsWith("Error") 
       && key[0].toUpperCase() == key[0]){
        return true
    } 
    return false
});

console.log(errorNames);