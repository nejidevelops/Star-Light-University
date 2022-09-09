import { Box, FormControl, InputLabel, Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'

function CourseApplication() {
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
            ></input>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Fees'
            ></input>
            <input
               type='text'
               placeholder="Department"
               className='field'
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Course Duration in Months'
           ></input>
          <button className="btn2">Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default CourseApplication;
