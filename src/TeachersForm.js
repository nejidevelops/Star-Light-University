import React from 'react'
import './Teachers.css'

function Teachers(){
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
            ></input>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Home Address'
            ></input>
            <input
               type='text'
               placeholder="Specialization"
               className='field'
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Salary Received'
           ></input>
          <button className="btn2">Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default Teachers;