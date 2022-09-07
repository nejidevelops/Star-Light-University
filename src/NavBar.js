import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    return(
      <div className="container-fluid">
        <div className="navbar">
          <div className="navb">
            <h2 className="school-logo">SOMA</h2>
          </div>
          <div className="navlinks">
            <NavLink to="/">
              HOME
            </NavLink>
            <NavLink to="/courses">
              COURSES
            </NavLink>
            <NavLink to="/students">
              STUDENTS
            </NavLink>
            <NavLink to="/teachers">
              TEACHERS
            </NavLink>
            <NavLink to="/about">
              ABOUT
            </NavLink>
            <NavLink to="/contactus">
              CONTACT US
            </NavLink>    
          </div>
               
        </div>
      </div>
    )
}

export default NavBar;