import logo from './logo.svg';
import Car from './components/Car';
import './App.css';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
import FetchInfo from './components/FetchInfo';
function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <div className="App">
      <Car name={carinfo.name} model={carinfo.model}/>
      <Events/>
      <Phone/>
      <Color/>
      <FetchInfo/>
    </div>
  );
}

export default App;
