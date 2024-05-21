//scope and hoisting


//this  - refer to the current context


const obj1 = {
    name : "sameer",
    age : 26,
    printString : function () {
        console.log(`hello, ${this.name}`); // inside obj1 
    }
}

obj1.printString()

console.log(this) // return {}  node environment
console.log(this) // at browser retun window object


//--------------------------------------------------------------

function fun1 () {
    let username = "dinesh";
    console.log("fun1: ", this.username)  //return undefine
}
fun1();



const fun2 = function() {
    let username = "dinesh";
    console.log("fun2: ", this.username) //return undefine
}
fun2();

const fun3 = () => {
    let username = "dinesh";
    console.log("fun3: ", this.username) //return undefine
}
fun3();



//---------------------------------------------------
//  implicit and explicit return of functions
//  implicit ->  () => ()
// explicit  ->  () => {return }


//----------------------------------------------------------

// iffe - immediately invoked function expression

;(function chai() {
    console.log("hello");   //name iffe
})()

;(() => {
    console.log("hello 2");  // unname iffe
})()


;((username) => {
    console.log("hello ,", username);  // passing parameters in unname iffe
})('sameer')