let score = "33aa"

console.log(typeof score)  //return string with small 's'
console.log(score) // return value

let convertIntoNumber = Number(score) 
// converting a string into value and it return number of type value
// here Number is with capital 'N' its a class and all class name start with capital letter.
console.log(typeof convertIntoNumber) // return number
console.log(convertIntoNumber) // return NaN(not a number) because string is convert to number

console.log("-----------------------------")
let score1 = null
let convertIntoNumber1 = Number(score1) 
console.log(typeof convertIntoNumber1) // return number
console.log(convertIntoNumber1) // return 0

console.log("-----------------------------")
let score2 = undefined
let convertIntoNumber2 = Number(score2) 
console.log(typeof convertIntoNumber2) // return number
console.log(convertIntoNumber2) // return NaN

console.log("-----------------------------")
let score3 = true
let convertIntoNumber3 = Number(score3) 
console.log(typeof convertIntoNumber3) // return number
console.log(convertIntoNumber3) // return 1 if false it will return 0


// "33" => 33
// "22abd" => Nan
//"null" => 0
//"undefine" => Nan
//"true" => 1
//"false" => 0
console.log("-----------------------------")
let islogIn = NaN
let convertToBoolean = Boolean(islogIn)
console.log(convertToBoolean)

// 1 => true
// 0 => false
// "" => false
// "abc" => true
// null => false
// undefine => false
// NaN => false

console.log("-----------------------------")
let islogIn1 = undefined
let convertToString = String(islogIn1)
console.log(convertToString)

// whatever writen in get coverted into string
// eg NaN => "NaN"


//////////////////////////////////////OPERATION//////////////////////

console.log("operation-----------------------")
console.log(1 + "1");  //11
console.log("1" + 1);  // 11
console.log(1 + 1 + "1"); // 21
console.log("1" + 1 + 1);  //111

console.log("-----------------------")
console.log(+true) // 1
console.log(+"") //0

 
