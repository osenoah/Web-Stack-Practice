
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
      console.log(count)

let amount = count + "-"
previousEl.innerHTML += amount

}