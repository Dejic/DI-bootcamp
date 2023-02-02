// // Part I - Review About Arrays

// const people = ["Greg", "Mary", "Devon", "James"];
//     people.shift()
//     people.pop()
//     people.push("Jason")
//     people.push("Deji")
//     console.log(people.indexOf("Mary"))
//     people.slice()
//     console.log(people.slice())
//     console.log(people.indexOf("foo"))
//     // The indexOf() method returns -1 if the value is not found.
// let last = (people[3])
//     console.log(last)

//     // Part II - Loops

//     for(i=0; i < people.length; i++) {
//         console.log(people[i])
//     }

//     // Exercise 2 : Your Favorite Colors

//     const Colors = ["blue", "yellow", "purple", "red", "orange"]
//     const suffix=["st","nd","rd","th","th"]
//     for(i=0; i < Colors.length; i++) {
//         console.log(`my ${i+1}${suffix[i]} choice is ${Colors[i]}`)
//     }
//     console.log("My fav color is " +Colors[0])
//     console.log(`My favorite color is ${Colors[0]}`)

//     // Exercise 3 : Repeat The Question

//     function greeter() {
//         console.log(`Hello my name is ${username}`);
//     }
//     greeter("Deji")

// const arr=["blue","green","pink"]
// const secondArr=[1,2,3,4]
// // for (i=0;i<secondArr.length;i++){
// // console.log(secondArr[i])
// // }

// arr.forEach((item,i)=>{
// console.log(item+ " "+ (i+1))
// })

// function myAge(Age){
//     let momsAge = myAge*2;
//     let dadsAge = momsAge*1.2;
//     console.log(`My mum is ${momsAge} and my dad is ${dadsAge}`)
// }
// function myName(fname) {
//     const greeting = `Hello my name is ${fname}`
//     ;
//     return greeting;
// }
// const hello = myName("Deji");
// console.log(hello);

// function mom(myAge){
//     return myAge*2;
// }
// console.log(mom(18));


// let numbers = [123, 8409, 100053, 333333333, 7]
//     numbers.forEach(element => {
//         if(element %3 === 0){
//             console.log(true)
//         }else{
//             console.log(false)
//         }    
        

//     });
   
    // let guestlist = {
    //     randy: "Germany",
    //     karla: "France",
    //     wendy: "Japan",
    //     norman: "England",
    //     sam: "Argentina"
    // }
    // let nameInput = prompt("what is your name?")
    // if(nameInput in guestlist)  {
    //     console.log(`Hi! I'm  ${nameInput}, and i'm from ${guestlist[nameInput]}`)
    // }
    // else{
    //     console.log(`hi! i'm a guest.`)
    // }

    let personOne = {
        fullName: "Sam lew",
        mass: 64,
        height: 1.46,
bmi: function (){
   return (personOne.mass / (personOne.height * personOne.height))
}}
    
    let personTwo = {
        fullName: "Emanuel crater",
        mass: 76,
        height: 1.56,
bmi: function (){
    return (personTwo.mass / (personTwo.height * personTwo.height)
        )
}}

console.log(personOne.bmi())
console.log(personTwo.bmi())

if (personOne.bmi() > personTwo.bmi()){
    console.log(personOne.fullName)
}
else{
    console.log(personTwo.fullName)
}

// function greet (){
//     console.log("hi")
//     let name = "daniel"
//     return name
// }

// console.log(greet())
