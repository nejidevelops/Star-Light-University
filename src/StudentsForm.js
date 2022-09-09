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
              name='student_name'
              required
              className ="field"
              placeholder="Student's Name"
              value={schoolData.student_name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type='text'
              name='email'
              required
              className='field'
              placeholder='Email'
              value={schoolData.email}
              onChange={handleChange}
            ></input>
            <input
               type='text'
               name='course_id'
               placeholder="Course ID"
               className='field'
               value={schoolData.course_id}
              onChange={handleChange}
            ></input>
           <input
               type='text'
               name='teacher_id'
               required
               className='field'
               placeholder='Teacher ID'
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