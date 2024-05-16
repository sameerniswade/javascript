let date = new Date(2023,)

console.log(date.toString()) // Thu May 16 2024 11:13:24 GMT+0530 (India Standard Time)
console.log(date.toDateString()) // Thu May 16 2024
console.log(date.toLocaleString())

// type of date -> Object


// date in millisecond
console.log("------------------------------------------")

console.log(Date.now()) // millisecond
console.log(Date.now() / 1000) // in seconds

console.log(date.toLocaleString('default', {weekday : "long"}))