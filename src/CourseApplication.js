import React from 'react'
import './CourseApplication.css';
import { useState } from 'react';

function CourseApplication({handlePosting}) {
  const [courseData, setCourseData] = useState({
    course_name: '',
    fees: '',
    department: '',
    course_duration: '',
  })

  function handleSubmit(e){
    e.preventDefault();
    fetch(`https://group-3-backend-app.herokuapp.com/courses`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(courseData)
    })
    .then(r => r.json())
    .then(data => {
        handlePosting(data)
    })

    setCourseData({
        course_name: '',
        fees: '',
        department: '',
        course_duration: '',
    })
}

  function handleChange(e){
    setCourseData({
        ...courseData, [e.target.name]: e.target.value,
    });
} 
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Enroll Now</h2>
          <form>
            <input
              type='text'
              required
              className ="field"
              placeholder='Course Name'
              value={courseData.course_name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Fees'
              value={courseData.fees}
              onChange={handleChange}
            ></input>
            <input
               type='text'
               placeholder="Department"
               className='field'
               value={courseData.department}
              onChange={handleChange}
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Course Duration in Months'
               value={courseData.course_duration}
              onChange={handleChange}
           ></input>
          <button className="btn2">Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default CourseApplication;
