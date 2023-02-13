const some = document.getElementsByTagName("h1");
console.log(some)
const element = document.getElementById("demo");
element.remove();

const back = document.getElementById("toChange");
const bacc = document.getElementById("hi");
back.addEventListener("click", RespondClick);

function RespondClick() {
    hi.style.backgroundColor = "red"
}

const thro = document.getElementById("hello");
thro.addEventListener("click", RespondToClick);

function RespondToClick() {
    thro.style.display="none"
}

const para = document.querySelectorAll("p")
function makeBold() {
para.forEach(element => {
    element.style.fontWeight = "bold"
});
}
const boldButton = document.getElementById("bold")
boldButton.addEventListener("click", makeBold)

const form = document.getElementById("foorm")
console.log(form)
const input1 = document.getElementById("fname")
console.log(input1)
const input2 = document.getElementById("lname")
console.log(input2)
console.log(form.fname.value)

form.addEventListener("submit", function prevent(e) {
    e.preventDefault()
    console.log(input1.value)
    console.log(input2.value)
if (input1.value <= 0 || input2 <=0) {
    alert(`Please fill in the form!`)
}else{
    const ul = document.createElement("ul")
})
