let adressNumber = 5;
let addressStreet = "BenYehuda";
let country = "Israel";
let globalAddress = "I live in " +addressStreet +" " + adressNumber + ", in" +country
console.log(globalAddress)

let birthYear = 2004
let futureYear = 2078
let age = futureYear-birthYear
let IwillBe = "I will be " +age +" in " +futureYear
console.log(IwillBe)

let colors = ["blue", "yellow", "green"]
console.log(colors);
colors.push("pink")
console.log(colors)
colors.pop()
console.log(colors)
console.log(colors.splice(2,1,"pink","purple"))
console.log(colors)

let pets = ['cat','dog','fish','rabbit','cow']
console.log(pets[1])
console.log(pets)
pets.splice(3,1, "horse")
console.log(pets)
console.log(pets.length)
// let promptAnswer = prompt("how old are you?")
// alert("the user is" + " " + promptAnswer + " " + "years old")

// let isBoss = confirm("Are you the boss?");
// alert(isBoss); // true if OK is

let userinfo = {
    username: "Jonathan", password: "Jonny123"
}

let database = [userinfo]
console.log(database[0].password)

let newsfeed = [
    
 ]