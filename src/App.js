import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='container'>
        <span style={{color: darkMode ? "gray":"yellow"}}>☀︎</span>
        <div className='switch-checkbox'>
        <label className='switch'>
          <input type="checkbox"
            onChange={()=> setDarkMode(!darkMode)}
          />
          <span className='switch round'></span>
        </label>  
        
        </div>      
        <span style={{color: darkMode ? "yellow":"gray"}}>☽</span>        
      </div>
    </div>
  );
}

export default App;
