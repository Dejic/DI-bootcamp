function sayHi() {
    alert("hello world");
  }
  setTimeout(sayHi, 2000);

  let numberOfPs=0
function para() {
    const container = document.getElementById("container")
    const newP = document.createElement("p")
    newP.innerHTML = "hello world"
    container.append(newP)
    numberOfPs++
    console.log(numberOfPs)
    if (numberOfPs >= 5
    ) {
        clearInterval(id)
    }
}
const id = setInterval(para, 2000)

const btn = document.getElementById("clear")
btn.addEventListener("click", stop)
function stop() {
    clearInterval(id)
}