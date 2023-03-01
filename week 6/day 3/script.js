let button = document.querySelector('#button');
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birthYear');
let homeWorld = document.querySelector('#homeWorld');

button.addEventListener("click", getPersonInfo)

function getPersonInfo() {
    let randomNumberGenerator = Math.floor(Math.random() * 80);
    console.log(randomNumberGenerator)
    fetch(`https://www.swapi.tech/api/people/${randomNumberGenerator}`)
 .then(res => res.json())
 .then(data => {
    fetch(data.result.properties.homeworld)
    .then((data)=> data.json())
    .then((data)=> homeWorld.innerHTML = `Home World: ${data.result.properties.name}`)
    console.log(data)
    names.innerHTML =  data.result.properties.name
    height.innerHTML = `Height: ${data.result.properties.height}`
    gender.innerHTML = `Gender: ${data.result.properties.gender}`
    birthYear.innerHTML = `Birth Year: ${data.result.properties.birth_year}`
    
 })
 .catch(err => console.error(err));
}

function updateInfoWithError(){
    names.innerText = 'Oh No! That person isnt available.';
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
  }

  function updateWithLoading(){
    names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
  }
