import React from 'react'
import './Teachers.css'
import { useState } from 'react';

function TeachersForm({handlePosting}){
  const [schoolData, setSchoolData] = useState({
    name: '',
    home_address: '',
    specialization: '',
    salary: '',
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
        name: '',
        home_address: '',
        specialization: '',
        salary: '',
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
              placeholder='Teacher Name'
              value={schoolData.name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Home Address'
              value={schoolData.home_address}
              onChange={handleChange}
            ></input>
            <input
               type='text'
               placeholder="Specialization"
               className='field'
               value={schoolData.specialization}
              onChange={handleChange}
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Salary Received'
               value={schoolData.salary}
              onChange={handleChange}
           ></input>
          <button className="btn2">Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default TeachersForm;