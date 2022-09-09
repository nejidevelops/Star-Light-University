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


function App() {
  return (
  
      <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/students" element={<Students />} />
        <Route exact path="/teachers" element={<Teachers />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/contact-us" element={<ContactUs />} />    
      </Routes>
      </div>

  );
}

export default App;