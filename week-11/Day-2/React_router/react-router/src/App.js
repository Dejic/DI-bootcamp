import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import MyProjects from './Components/MyProjects';
import Project from './Components/Project';
import {Route, Link, Routes, useLocation, useParams} from "react-router-dom"
import PostList from './Components/PostList';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/projects">My Projects</Link>
      </li>
      <li>
        <Link to="/project/javascript">Projects</Link>
      </li>
      <li>
        <Link to="/postlist">Post List</Link>
      </li>
      <li>
        <Link to="/Example1">Example1</Link>
      </li>
      <li>
        <Link to="/Example2">Example2</Link>
      </li>
      <li>
        <Link to="/Example3">Example3</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/project/:name" element={<Project/>}/>
      <Route path="/postlist" element={<PostList/>}/>
      <Route path="/Example1" element={<Example1/>}/>
      <Route path="/Example2" element={<Example2/>}/>
      <Route path="/Example3" element={<Example3/>}/>
    </Routes>
  </div>
);

export default App;
