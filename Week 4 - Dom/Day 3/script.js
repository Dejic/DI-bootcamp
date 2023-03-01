const header = document.getElementById("banner")
header.style.backgroundColor = "red"

// const timer = setTimeout(startTimeout, 5000)
// console.log(timer)
let x = 10
let id=setInterval(timer, 1000)

function timer () {
  
   if(x <= -1){
    clearInterval(id)
   }else{
    header.innerHTML = `The sale ends in ${x} sec!`
    x=x-1
   }
}
