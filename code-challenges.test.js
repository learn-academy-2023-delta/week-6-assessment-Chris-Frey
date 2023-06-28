// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
  describe("personInfo", () => {
    it("returns an array with a sentence about each person with their name capitalized.", () => {
      expect(personInfo(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
  })
 

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
  const capitalized = (input) => {
    let firstName = input.split(' ')[0]
    let lastName = input.split(' ')[1]
    return (firstName[0].toUpperCase() + firstName.slice(1)) + " " + (lastName[0].toUpperCase() + lastName.slice(1))
  }

  const personInfo = (input) => {
    return input.map((item) => {
      return `${capitalized(item.name)} is ${item.occupation}.`
    }) 
  }
// Pseudo code:
//create a method that takes the array input
// map over each object in the array
// create a helper method to capitalize the first letter of each of the names
//  pass the names to the helper method
// return the updated names to the original method and return an interpolated string from the map function to the new array

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remainders", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
  const remainders = (input) => {
    let newArr = input.filter(element => {
       return typeof element === 'number'
    })
    return newArr.map(element => {
      return element % 3
    })
  }

// Pseudo code:
// create an arrow function that takes 1 argument
// check `typeof` to see if something is a number
// filter numbers to a new array assigned to a variable
// map over new array and run each element through a modulo expression that returns the remainder

// 
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubedSum", () => {
  it("returns the sum of all the numbers cubed.", () => {
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
  const cubedSum = (input) => {
    let s = 0
    for(let i = 0; i < input.length; i++){
      s += input[i] ** 3;
    }
    return s
  }
// Pseudo code:
// create arrow function that takes 1 argument
// loop through the array adding the cubed product to the sum of a variable
// return the variable after loop completion