//DOGS COUNTER
function increment() {
    console.log("It works")
 }
 increment()

 function JJ() {
    console.log(42)
 }
 JJ()

 let lap1 = 23
 let lap2 = 39
 let lap3 = 45

 function Laps() {
    console.log(lap1 + lap2 + lap3)
 }

 Laps()

 let dog = 0

 function Dogs() {
    dog += 1
}
 Dogs()
 Dogs()
 Dogs()
 console.log(dog) 

 


let count = 0
   function Yeat() {
   let counterEl = document.getElementById('counterEl')
     count += 1
     counterEl.innerHTML = count
    
   }

   
   let user = "Ose"
   
   let message = "You have three new notifications."

   let messageuser = "We have logged"
   console.log(user + ", " + message)

   let greet = "Hi I am, "
   let meetme = greet + user + "."
   console.log(meetme)

let welcomeEl = document.getElementById('welcomeEl')
  
let welcome = "Welcome back, "
welcomeEl.innerHTML =  welcome + user

welcomeEl.innerHTML += "🙃"
   
 let previousEl = document.getElementById("previous")
function save() {
   let amount = count + "-"
      previousEl.textContent += amount
      counterEl.textContent = 0
      count = 0 
   console.log(count)
}

let firstName = "Ose "
let lastName = "Noah"
let fullName = firstName + lastName
console.log(fullName)
let login = "Hi there," + " " + fullName
function loginuser() {
   console.log(login)
}
loginuser()

let myPoints = 3
function addPoints() {
   myPoints += 3
}

function removePoints() {
   myPoints -= 1
}


addPoints()
removePoints()
console.log(myPoints * 2)



function Yeat() {
   
   let error = "Something went wrong, please try again"
   let errorL = document.getElementById('error') 
   errorL.textContent = error
   
}

//ARITHMETIC FUNCTIONS

let num1 = 9
let num2 = 3

/* document.getElementById.textContent('numbers') = num1
document.getElementById.textContent('numbers') = num2 */

let resultL= document.getElementById('result')
function add() {
   let addition = (num1 + num2)
   resultL.textContent += addition + "-"
}

function subtract() {
   let subtract = (num1 - num2)
   resultL.textContent += subtract + "-"
}

function divide() {
   let divide = (num1 / num2)
   resultL.textContent += divide + "-"
}

function multiply() {
   let multiply = (num1 * num2)
   resultL.textContent += multiply + "-"
} 