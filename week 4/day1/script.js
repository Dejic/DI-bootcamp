function getFreeTerinary(number) {
    return number > 2000 ? "you are in the 21st century" : "you live in the middle age";
}
console.log(getFreeTerinary(prompt("what year where you born?")))

const numbers = [10,11,12,15,20];
numbers.forEach((number )=>{
    if (number %2 === 0){
        console.log(number)
    }
});

