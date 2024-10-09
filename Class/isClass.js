const toString = Function.prototype.toString;
// 检查是否是类
function isClass(func) {
    return typeof func === 'function' && /^class\s/.test(toString.call(func));
}



function fn() { }
class ClassA { }

isClass(fn)           // false
isClass(ClassA)       // true

fn.toString()        // "function fn(){}"
ClassA.toString()    // "class ClassA{}"