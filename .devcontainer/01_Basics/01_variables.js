const accountId = 1234 // only available in scope and cannot be change 
let accountEmail = "sameer@gmail.com" // only available in scope and can be change 
var accountPassword = "sameer@123" // 
accountCity = "wardha" // bad way  declear variable and it is globaly available and can chane anywhere
let accountState; // return undefine
// accountId = 1233 not allowed because its is constant

/* Prefer not user var 
   Because of issue in block scope and funtional scope
*/
console.table([accountEmail,accountId, accountPassword, accountCity, accountState])
console.log("hello")