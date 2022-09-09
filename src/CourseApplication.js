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
    fetch(`http://localhost:9292/courses`,{
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
    <div className="container3">
      <div className="contact-box1">
        <div className="lefti"></div>
        <div className="right">
          <h2>Enroll Now</h2>
          <form>
            <input
              type='text'
              name='course_name'
              required
              className ="field"
              placeholder='Course Name'
              value={schoolData.course_name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type='number'
              name='fees'
              required
              className='field'
              placeholder='Fees'
              value={schoolData.fees}
              onChange={handleChange}
            ></input>
            <input
               type='text'
               name='department'
               placeholder="Department"
               className='field'
               value={schoolData.department}
              onChange={handleChange}
            ></input>
           <input
               type='number'
               name='course_duration'
               required
               className='field'
               placeholder='Course Duration in Months'
               value={schoolData.course_duration}
              onChange={handleChange}
           ></input>
          <button className="btn2" onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default CourseApplication;
