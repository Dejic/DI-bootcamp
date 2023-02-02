function playTheGame() {
    let start = confirm("would you like to play?")
     if (start === false) {
        alert("No problem, Goodbye.")
     }else{
        let digit = prompt("Please enter a number between 0 and 10.")
     digit=Number(digit)
     if(isNaN(digit)){
        return console.log("Sorry Not a number, Goodbye")}

        if(digit <0 || digit >10){
           return console.log("Sorry it's not a good number, Goodbye.")
    }else{
        let computerNumber = Math.floor(Math.random() * 11);
        compareNumbers(digit,computerNumber)
    }}}
function compareNumbers(userNumber,computerNumber) {
    if(userNumber === computerNumber){
        console.log("WINNER")
    }
    
}