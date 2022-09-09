import React from 'react'
import './CourseApplication.css';
import { useState } from 'react';

function CourseApplication({handlePosting}) {
  const [schoolData, setSchoolData] = useState({
    course_name: '',
    fees: '',
    department: '',
    course_duration: '',
  })

  function handleSubmit(e){
    e.preventDefault();
    fetch(``,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(schoolData)
    })
    .then(r => r.json())
    .then(data => {
        handlePosting(data)
    })

    setSchoolData({
        course_name: '',
        fees: '',
        department: '',
        course_duration: '',
    })
}

  function handleChange(e){
    setSchoolData({
        ...schoolData, [e.target.name]: e.target.value,
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
              value={schoolData.course_name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Fees'
              value={schoolData.fees}
              onChange={handleChange}
            ></input>
            <input
               type='text'
               placeholder="Department"
               className='field'
               value={schoolData.department}
              onChange={handleChange}
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Course Duration in Months'
               value={schoolData.course_duration}
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
