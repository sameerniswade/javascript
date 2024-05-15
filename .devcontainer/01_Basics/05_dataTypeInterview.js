// type of data type

// 1. primitive
// 7 types : String, number, boolen, null, undefine, symbol, BigInt, 
//  

const id = Symbol("123")

const BigIntger = 1234568098765433567976n; // BigInt

// 2. Non-primitive or reference

// Array, Objects, Funtions


// -------------------TypeOf-------------------------------
const n = null;
console.log(typeof n)   // null type return object

const a = [1, 2, 3];
console.log(typeof a)   // array type return object

const o = {
    name : "dinesh",
    age : 23,
}
console.log(typeof o)   // object type return object

const f = function () {
    console.log("hello world")
}
console.log(typeof f)   // function type return  "object function"