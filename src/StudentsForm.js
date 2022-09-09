import React from 'react'
import { useState } from 'react';

function StudentsForm({handlePosting}){
  const [schoolData, setSchoolData] = useState({
    student_name: '',
    email: '',
    teacher_id: '',
    course_id: '',
  })

  function handleSubmit(e){
    e.preventDefault();
    fetch(`http://localhost:9292/students`,{
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
        student_name: '',
        email: '',
        course_id: '',
        teacher_id: ''
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
              placeholder="Student's Name"
              value={schoolData.student_name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Home Address'
              value={schoolData.email}
              onChange={handleChange}
            ></input>
            <input
               type='text'
               placeholder="Specialization"
               className='field'
               value={schoolData.course_id}
              onChange={handleChange}
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Salary Received'
               value={schoolData.teacher_id}
              onChange={handleChange}
           ></input>
          <button className="btn2" onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default StudentsForm;