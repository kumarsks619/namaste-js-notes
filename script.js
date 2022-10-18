// Closures ***************************************************************************************************************
// Closures = Function + its lexical scope
const fun = () => {
    const close = (j) => {
        setTimeout(() => {
            console.log(j)
        }, j * 1000)
    }

    for (var i = 1; i <= 5; i++) {
        close(i)
    }
}

// fun()

// Closure tricky part
const outer = () => {
    const inner = () => {
        console.log(a)
    }
    let a = 7 // although this is "let" variable and declared after the inner(), it will still form a closure as usual (must be before return)

    return inner
}

// outer()()

// Closure used as DATA HIDING / ENCAPSULATION
function Counter() {
    let count = 0

    this.increment = () => {
        count++
        console.log(count)
    }
    this.decrement = () => {
        count--
        console.log(count)
    }
}

const count1 = new Counter() // the function must be defined using "function" keyword to get this work
// count1.increment()
// count1.increment()
// count1.decrement()

const count2 = new Counter() // this will be purely a new counter and will start from zero

// Hoisting *******************************************************************************************************************
// console.log(p) // this will give 'undefined' although vars are hoisted (lets will give reference error, they aren't hoisted)
var p = 18

// console.log(hoist)
var hoist = function () {
    console.log(
        "Hey, I'm also NOT hoisted, although function keyword is used while creating me but I'm assigned to a variable!!!"
    )
}

// window (=== this) Global Space for the WHOLE code *************************************************************************
var t = 10
// console.log(t)
// console.log(window.t)
// console.log(this.t)
// console.log(window === this)

function wind() {
    var u = 5
    console.log('u = ', window.u) // ---> undefined (as they are local variables so they are not attached to the Global Space)
    console.log('u = ', this.u) // ---> undefined
    console.log('t = ', window.t)
}

// wind()

// let vs var vs const *************************************************************************************************
var m = 10
var m = 100 // variables declared using "var" can be re-declared

// console.log(n) // TEMPORAL DEAD ZONE ---> the zone for a particular "let" variable before it is declared
// "let" variables are also HOISTED but in a different memory scope (called SCRIPT), not in the Global Scope (window/this)

let n = 5
// let n = 15 // however variables declared using "let" can't be re-declared ---> SYNTAX Error

// const r // "const" variables must be initialized at the time of declaration --> SYNTAX ERROR

// Shadowing ************************************************************************************************************
var c = 17
{
    var c = 19
    // console.log(c) // ---> print 19 ---> This is known as SHADOWING
}
// console.log(c) // ---> also print 19

let f = 3
{
    // var f = 1 // ---> SyntaxError - "var" cannot shadow "let" because "var" is trying to invade "let"'s scope
}

// Functions ************************************************************************************************************
// Function Statement / Function Declaration  ---> These are HOISTED
function car() {
    console.log('car is called!')
}

// Function Expression ---> These are NOT HOISTED
var bus = function () {
    console.log('bus is called!')
}

// Named Function Expression
var truck = function big() {
    console.log('truck is called!')
    console.log(big) // ---> "big" can be accessed here inside its local scope
}

// truck()
// big() // ---> ReferenceError - "big" has a local scope (NOT global)

// Anonymous Function --> Must be assigned to variable otherwise ---> SYNTAX ERROR
// function () {
//     console.log('anonymous function is called!')
// }

// Parameters vs Arguments
function pull(obj) {
    // --> "obj" is a Parameter
    console.log(obj + ' is pulled.')
}

// pull('Box')  // ---> "Box" is an Argument

// setTimeout() tricky output question ***********************************************************************************
console.log('Start')

setTimeout(() => {
    console.log('Callback')
}, 0) // timeout of 0 seconds

console.log('End')

// Trick to convert decimal to binary ************************************************************************************
const decimals = [0, 1, 2, 3, 4, 5, 6]

const toBinary = (numbers) => numbers.map((num) => num.toString(2))

// console.log(toBinary(decimals))
