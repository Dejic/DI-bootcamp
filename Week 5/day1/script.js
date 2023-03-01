// function getFreeTerinary(number) {
//     return number > 2000 ? "you are in the 21st century" : "you live in the middle age";
// }
// console.log(getFreeTerinary(prompt("what year where you born?")))

// const numbers = [10,11,12,15,20];
// numbers.forEach((number )=>{
//     if (number %2 === 0){
//         console.log(number)
//     }
// });

// // #1 - it will alert 3
// function funcOne() {
//     let
//      a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? - it wont run

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
// funcThree()
// funcTwo()
// funcThree()
// it will allert with a 5 as let is out of the function, on the global scope.

//#3
// function funcFour() {
//     window.a = "hello";
// }


/// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
//}
// // #3.1 - run in the console:
// funcFour()
// funcFive()

// prediction - funcfour will be hello and func5 wont produce anyting.

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console: it will print test
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? it wont let you, redefine anywhere else in the code.

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? no difference, as they are in different scops.



const winBattle = ()=>{
    return true
}
let experiencePoints = winBattle() === true ? 10 : 1
console.log(experiencePoints)
