// 1. its is Object
// 2. collection of items in single variable
// 3. copying arrray is always shallow copy

const array = [1, 2, 3, 4, 5, true, "sameer"];

const firstArray = ["disnesh", "mangesh"]
const newArray = new Array(1, 2, 3, 4, "sameer")

// console.log(newArray)

array.shift() // shirt towards left or remove left element and shift all elements towards left
array.unshift(4) // add 4 at starting of array and shift all elements towards right

console.log(array)


console.log(array.includes(9));// return true or false
console.log(array.indexOf(8));// return index if available otherwise return -1

console.log("------------------------------------------")

console.log(typeof array)

const newArray1 = array.join("niswade")

console.log(newArray1)

// slice and splice


console.log("------------------------------------------")

const array2 = [1, 2, 3, 4, 5]

const sliceArray = array2.slice(1, 3)
console.log("slice", sliceArray)
console.log("slice", array2)

const spliceArray = array2.splice(1, 3)
console.log("splice", spliceArray)
console.log("splice", array2)