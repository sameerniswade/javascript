const sym = Symbol("sameer")
console.log(sym)
console.log(typeof sym)


const obj = {
    sym : Symbol("hello")
}

const sym1 = Symbol("world"); // this srting act as description 

const obj1 = {
    [sym1]: "hello"  // here the string is value or defination of key "sym1"
};


console.log(obj.sym)



// accessing the value

const newObj = {
    name : "sameer",
    age : 35,
}

console.log("-----------------------------------------------------------");
console.log(newObj.age)
console.log(newObj["age"])


// lock the values of objects or freeze

// Object.freeze(newObj)

console.log("-----------------------------------------------------------");


//adding function in objects

const neObj1 = {
    name : "sameer",

    fun : () => {
        console.log("fun")
    }
    ,
    fun2 : function () {
        console.log("fun2");
    },
}

//adding function

neObj1.fun3 = () => {
    console.log("fun3")
}

console.log(neObj1)

// accessing value

neObj1.fun4 =  function () {
    // this.name = "niswade"
    console.log("this", this.name)
}

neObj1.fun4()

console.log(neObj1)