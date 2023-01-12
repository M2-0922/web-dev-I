// --- When to use var, let and const
// const - by default
// let only if rebinding is required
// var shouldn't be used in ES6

//Arrow functions

const greeting = function(name){
    // function is noname function
    console.log('Hello ' + name)
    // console.log(`Hello ${name}`) //template literals
}

const greeting2 = (name) => { 
    console.log('Hello ', name)
}

const someFunc = () => {
    console.log('Hello World')
}

const someFuncReturnString = () => {
    return 'Hello World'
}

//implicit return 
const someFuncReturnString2 = () => `Hello World`

function someFuncES5(){
    return `Hello World`
} 


const race = "100m dash"
const runners = ['Usain Bolt', 'Justin Gatlin','Williams']

const result = runners.map((runner, i) => ({ name: runner, race, place: i + 1})) //object literal, wrap everything inside parentheses
console.log(result)


//arrow function are anonymous .... to bind them to a variable
const greeting3 = name => console.log(`Hello, ${name}`)
greeting3("Tom")


function example(){
    console.log(arguments[0])
}
example(1,2,3)

const showWinner = () => {
    const winner = arguments[0]
    console.log(`${winner} was the winner!`)
}

showWinner(...runners)

const showWinnerFixed = (...args) => {
    const winner = args[0]
    console.log(`${winner} was the winner!`)
}

showWinnerFixed(...runners)


// Default Function Arguments
//Before ES6
function getLocation(city,country,continent){
    if(typeof country === 'undefined'){
        country = 'Spain'
    }

    if(typeof continet === 'undefined'){
        continent = 'Europe'
    }
    console.log(continent, country, city)
}

getLocation(undefined, undefined, 'Madrid')

getLocation(undefined, 'Madrid', 'Spain')

//ES6
const getLocationES6 = (city,country = 'Spain',continent = 'Europe') => {
    console.log(continent, country, city)
}

getLocationES6('Madrid')

getLocationES6('Madrid', 'Spain')


//Additional String Methods
//startsWith()

const code = "ABCDEFG"
console.log(code.startsWith("ABB"))
console.log(code.startsWith("abc"))
console.log(code.startsWith("ABC"))
console.log(code.startsWith("DEF", 3))
console.log('..........');

//endsWith()
console.log(code.endsWith("DDD"))
console.log(code.endsWith("defg"))
console.log(code.endsWith("DEFG"))
console.log(code.endsWith("FG",7))
console.log('..........');

//includes()
console.log(code.includes("ABB"));
console.log(code.includes("abc"));
console.log(code.includes("CDE"));

//repeat()
let hello = 'Hi'
console.log(hello.repeat(10))

//Destructuring - Objects
var person = {
    first: 'John',
    last: 'Doe',
    links : {
        social: {
            linkedin: undefined
        },
        webiste: "iamthatjohndoe.com"
    }
}

//Before ES6
var firstOld = person.first
var lastOld = person.last
console.log(firstOld, lastOld)

//ES6
const { first, last } = person
console.log(first,last)

const { linkedin:lnk = "www.notjohn.doe" } = person.links.social
console.log(lnk);
// console.log(linkedin);


//Destructuring - Arrays
const person2 = ['Abe', 'Gabe', 25, "pizza", "ice cream", "hot dogs"]
// const [name, surname, age] = person2
// console.log(name + ' ' + surname + ', ' +age)
// const [name, surname] = person2
// console.log(name + ' ' + surname)

const [name, surname, age, ...food] = person2
console.log(food)

let hungry = "yes";
let full = "no";

[hungry, full] = [full, hungry] // a note to myself!!!!
console.log(hungry,full)

//Spread operator and rest parameters
const veggie = ['tomato','cucumber','beans']
const meat = ['pork','beef','chicken']

// const menu = veggie.concat(meat)
const menu = [...meat, ...veggie]
console.log(menu)

const greens = [...veggie]
console.log(veggie)
console.log(greens)
console.log(veggie === greens);

const name1 = ["javier"] //---> mailbox1 
const name2 = ["javier"]// ---> mailbox2

console.log(name1 === name2);

// Rest Params
const runners2 = ["John", "Jane", "Charles", "Mark"]
const [firstRunner,secondRunner, ...losers] = runners2
console.log(losers)
console.log(...losers)

" ".split(',').join(" ")


//Symbol
const me = Symbol('Francois')
console.log(me)
const clone = Symbol('Francois')
console.log(clone)

console.log(me === clone);
console.log(me == clone);


// const office = {
//     "John": "CEO",
//     "Jane": "CTO",
//     "Jane": "CIO"
// }


const office = {
    [Symbol("John")]: "CEO",
    [Symbol("Jane")]: "CTO",
    [Symbol("Jane")]: "CIO"
}

// for(person in office){
//     console.log(person);
// }


const symbols = Object.getOwnPropertySymbols(office)
console.log(symbols)

const value = symbols.map(symbol => office[symbol])
console.log(value)