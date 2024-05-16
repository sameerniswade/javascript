const numbers1 = [1, 2, 3, 4];

const numbers2 = [6, 7, 8, 9];

//push
// numbers1.push(numbers2)

console.log(numbers1) // [ 1, 2, 3, 4, [ 6, 7, 8, 9 ] ]

//concat
const allNumbers =  numbers1.concat(numbers2)
console.log("all", allNumbers) //all [1, 2, 3, 4, 6, 7, 8, 9]


//spread operator

const allNumbers2 = [...numbers1, ...numbers2]
console.log(allNumbers2) //[1, 2, 3, 4, 6, 7, 8, 9]


// flat


const array4 = [1, 2, [2, 4, 6], [3, 6, 8,[4, 7, 8, 9, [5, 3, 7]]]]

console.log("flat", array4.flat(3)) 

console.log("------------------------------------------")

const array5 = ["lslsllss"]

console.log(Array.isArray("array5"))
console.log(Array.from({  java: {
    id: 1,
    title: "Java Programming",
},
python: {
    id: 2,
    title: "Python for Beginners",
},})) // retrun empty array



const a =1;
const b =2;
const c =3;

console.log(Array.of(a, b, c))