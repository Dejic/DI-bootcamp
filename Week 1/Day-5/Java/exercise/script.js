// Exercise 1: Your Favorite Food

let favoriteFood = "sushi"
let favoriteMeal = "breakfast"
let foodAndMeal = "I eat " + favoriteFood + " at every " + favoriteMeal
console.log (foodAndMeal)

// Exercise 2 : Series

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"] ;
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2]
let final = "i watched " + myWatchedSeriesLength + " series" + ": " + myWatchedSeries
console.log(final)

// Part II

myWatchedSeries.splice(2,1, "friends")
myWatchedSeries.push("how i met your mother")
myWatchedSeries.shift()
myWatchedSeries.unshift("brooklyn 99")
console.log(myWatchedSeries[myWatchedSeries.indexOf("money heist")].charAt(2));
console.log(myWatchedSeries)

// Exercise 3 : The Temperature Converter
let celc = 25;
let fer = (celc /5 * 9 + 32)
console.log(fer)

// Exercise 4 : Guess The Answers #1

console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual: 23