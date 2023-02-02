function infoAboutMe (){
        let name = "Deji"
        return (`Hello ${name}`)
    }
    
    console.log(infoAboutMe())

    // Part II : function with three parameters

function infoAboutPerson(personName, personAge, personFavoriteColor){
        console.log(`your name is ${personName}, you are ${personAge} years old and your favourite color is ${personFavoriteColor}`)}
        infoAboutPerson("David", 45, "blue")
        infoAboutPerson("Josh", 12, "yellow")

        // Exercise 2

    // function calculateTip() {
    //     let amount = prompt (`How much was your bill?`)
    //     amount = Number(amount)
        
    //     if(amount < 50){
    //         console.log(`Final amount is ${amount + amount*0.2}`)
    // }else if(amount >49 && amount <200){
    //     console.log(`Final amount is ${amount + amount*0.15}`)
    // }else{
    //     console.log(`Final amount is ${amount + amount*0.1}`)
    // }}
    // calculateTip()

    // Exercise 3
    let hold = 0
    let arr = []
    function isDivisible() {
        for (let i = 0; i < 501; i++){
    if(i%23 === 0){
        arr.push(i)
        hold = hold + i
    }}console.log(arr)
    console.log(hold)

    }
    isDivisible()

    // Exercise 4

    const stock = { 
        "banana": 6, 
        "apple": 0,
        "pear": 12,
        "orange": 32,
        "blueberry":1
    }  
    
    const prices = {    
        "banana": 4, 
        "apple": 2, 
        "pear": 1,
        "orange": 1.5,
        "blueberry":10
    } 

    let shoppingList = ["banana", "orange", "apple"]
    function myBill() {
    let sum = 0
        shoppingList.forEach(shoppingItem =>{
        if (shoppingItem in stock) {
            if (stock[shoppingItem] > 0){
            sum = sum + prices[shoppingItem]            }
           }
       })
      console.log(sum)
    } myBill()

    changeEnough(itemPrice, amountOfChange)