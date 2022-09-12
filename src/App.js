import './App.css';
import { Routes, Route } from 'react-router-dom';
import CoursePage from './CoursePage';
import About from "./About"
import ContactUs from "./ContactUs"
import NavBar from './NavBar';
import TeachersPage from './TeacherPage';
import StudentPage from './StudentsPage';
import Home from './Home';

function App() {
  return (
  
      <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/courses' element={<CoursePage />} />
        <Route exact path='/students' element={<StudentPage />} />
        <Route exact path='/teachers' element={<TeachersPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contactus' element={<ContactUs />} />
      </Routes>
      </div>

  );
}

export default App;