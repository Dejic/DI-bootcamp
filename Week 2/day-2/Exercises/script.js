
let x = 5;
let y = 2;

if (x>y) {
    console.log("x is the biggest number")
}else{
    console.log("y is the biggest number")
}

// Exercise 2: Chihuahua

let newDog = ("chihuahua")
console.log(newDog.length)
console.log(newDog.toLowerCase())
console.log(newDog.toUpperCase())

if (newDog === ("Chihuahua")) {
    console.log("I love Chihuahuas, its my favorite dog breed")
}else{
    console.log("I dont care, I prefer cats")
}

// Exercise 3: Even Or Odd

let number = prompt("Please input a number")
if ((number %2) ===0) {
    console.log( number + " is an even number")
}else{
    console.log( number + " is an odd number")
}

// Exercise 4: Group Chat

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
if (users.length ===0) {
    console.log("no one is online")
}else if (users.length ===1){
    console.log(users[0] + " is online")
}else if(users.length ===2){
    console.log(users[1] + users[2] + " are online")
}else{
    console.log(users[0] + " " + users[1] + " and " + (users.length -1) + " more are online")
}