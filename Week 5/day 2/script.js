// myArr = [10,20,30,40];

// let newArr = myArr.map((val, i, arr) => {
//   return {
//     value: val,
//     index: i
//   };
// });

// console.log(newArr)

let addNumbers = (a, b) => a + b;

// function weightInKilograms(num) {
//     return num * 1000;
// }

// let weightInKilograms = function (num) {
//     return num * 1000
// }

// The function name can be omitted in function 
// expressions to create anonymous functions.

let weightInKilograms = (a) => a * 1000;

    const result = weightInKilograms(3)
    console.log("result", result);

// Exercise 3

(function addInfoToDom(numberOfChildren, partnersName, geographicLocation, jobTitle) {
   const mainPage =  document.getElementById("container")
   const newPara = document.createElement("p")
   const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`
   newPara.innerHTML = sentence;
   mainPage.append(newPara)
})(0, "Mary", "Israel", "Student");

// Exercise 4

(function addNameToNavbar(username) {
    const navbar = document.getElementById("navbar")
    const newDiv = document.createElement("div")
    const newP = document.createElement("p")
    const newImg = document.createElement("img")
    newImg.style = "width : 50px"; "border : "

    newP.innerHTML = username
    newImg.src= "https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000"
    navbar.append(newDiv)
    newDiv.append(newP, newImg)
})("dej");

