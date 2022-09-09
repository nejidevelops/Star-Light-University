import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Students from "./Students"
import Teachers from "./Teachers"
import Course from "./Course"
import ContactUs from "./ContactUs"
import NavBar from './NavBar';
import Hero from './Hero';
import CourseApplication from './CourseApplication';


function App() {
  return (
  
      <div>
      <NavBar />
      <CourseApplication />
      </div>

  );
}

export default App;