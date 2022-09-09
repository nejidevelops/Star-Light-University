import React from 'react'
import './TeachersForm.css'
import { useState } from 'react';

function TeachersForm({handlePosting}){
  const [schoolData, setSchoolData] = useState({
    name: '',
    home_address: '',
    specialisation: '',
    salary_receiving: '',
  })

  function handleSubmit(e){
    e.preventDefault();
    fetch(`http://localhost:9292/teachers`,{
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
        specialisation: '',
        salary_receiving: '',
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
              name='name'
              className ="field"
              placeholder='Teacher Name'
              value={schoolData.name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type='text'
              required
              name='home_address'
              className='field'
              placeholder='Home Address'
              value={schoolData.home_address}
              onChange={handleChange}
            ></input>
            <input
               type='text'
               name='specialisation'
               placeholder="Specialization"
               className='field'
               value={schoolData.specialisation}
              onChange={handleChange}
            ></input>
           <input
               type='text'
               required
               name='salary_receiving'
               className='field'
               placeholder='Salary Received'
               value={schoolData.salary_receiving}
              onChange={handleChange}
           ></input>
          <button className="btn2" onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default TeachersForm;