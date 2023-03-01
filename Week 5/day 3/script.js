// An empty object  can be created using one of two syntaxes:
let user = new Object(); // "object constructor" syntax
let users = {};  // "object literal" syntax

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}
let objects = Object.entries(myObj)
objects.forEach((element, i) => {
console.log(`The number ${i+1} key is ${element[0]} and The number ${i+1} value is ${element[1]}`)
});

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

//   bread, carrot, potato, chicken.
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ------2------
const country = "USA";
console.log([...country]);

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

const userss = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

             