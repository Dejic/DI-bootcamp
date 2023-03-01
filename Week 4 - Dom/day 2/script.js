function insertRow() {
    let tableRow = document.getElementById("table");
    const row = document.createElement("tr");
    const cell1 = document.createElement("td")
    const cell2 = document.createElement("td")
    cell1.innerHTML = "new row"
    cell2.innerHTML = "new row"
    row.append(cell1, cell2);
    tableRow.append(row)
}

const btn1 = document.getElementById("jsstyle");
btn1.addEventListener("click", RespondClick);
btn1.addEventListener("mouseover", RespondMouseOver);
btn1.addEventListener("mouseout", RespondMouseOut);

function RespondClick() { 
   btn1.style.color = "red"
} 

function RespondMouseOver() { 
    btn1.style.backgroundColor = "blue"}

function RespondMouseOver() {
        btn1.style.fontSize = "large"} 

function RespondMouseOut() { 
    btn1.style.fontSize = "small"
}     


const form = document.forms.form1;
const firstInput = form.elements.fname;
const secondInput = form.elements.lname;
console.log(firstInput.value, secondInput.value)

let option = document.getElementById("select1")
option.options[1].selected = true;
  option.value = 'pear';
  option.selectedIndex = 2;
  console.log(option.selectedIndex)
  console.log(option.value)

  const newOption = document.createElement("option")
  newOption.value = "work"
  newOption.innerHTML = "work"
  option.append(newOption)
  const anotherOption = document.createElement("option")
  anotherOption.value = "Primary School"
  anotherOption.innerHTML = "primary School"
  option.prepend(anotherOption)

  const btn = document.querySelector("#form")
  btn.addEventListener("click", alertMe)

function alertMe(){
    alert(option.value)
}

