// Exercise 1

let favoriteFood = ("pasta");
let favoriteMeal = ("dinner");
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`)

// Exercise 2
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);
let myWatchedSeriesSentence = ("black mirror, money heist, and the big bang theory");
console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`);
myWatchedSeries.pop();
myWatchedSeries.push("Friends");
myWatchedSeries.push("Modern Family");
myWatchedSeries.unshift("How I met your mother");
myWatchedSeries.splice(0,2)
console.log(myWatchedSeries)