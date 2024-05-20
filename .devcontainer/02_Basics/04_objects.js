// const user = new Object()        // singleton
//                                 //both are same
// const user = {  }               // non singleton object




//object assign

const source = {
    1 : 'a',
    2 : 'b',
}

const target = {
    3 : 'c',
    4: 'd'
}

const newObject = Object.assign(source, target) 

console.log(newObject)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const newObj1 = Object.assign({}, source, target)  // {} work as source
                            
console.log(newObj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//or use spread opetator

obj2 = {
    ...source,
    ...target
}


// removing values and key from object



console.log("keys", Object.keys(source))  //keys [ '1', '2', '3', '4' ]
console.log("keys", Object.values(source)) // Values [ 'a', 'b', 'c', 'd' ]

//entries

console.log("entries", Object.entries(source)) //return array converted from object [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

//destructing of object

const newobject5 = {
    name : "sameer",
    age : 26
}

const {age} = newobject5
console.log(age)