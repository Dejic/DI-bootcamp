const container=document.getElementById("container")

fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=> res.json())
.then((res)=>{
console.log(res)
res.forEach(element => {
    const text=document.createElement("h3");
text.innerHTML= element.title;
container.append(text)

});


}).catch((e)=>console.log(e));

