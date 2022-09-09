import React from "react";
import { useEffect,useParams, useState } from "react";

function StudentSpecific(){
    const { id } = useParams();
    const [studentDetails, setStudentDetails] = useState();
    const [schoolData, setSchoolData] = useState({
        name: '',
        email: '',
        teacher_id: '',
        course_id: '',
    })


    function handleChange(e){
        setSchoolData({
            ...schoolData, [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        fetch(`/students/${id}`)
        .then(r => r.json())
        .then(data => setStudentDetails(data))
    }, [])

    console.log(studentDetails)

    function handleUpdateStudent() {
        fetch(`/students/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: schoolData.name,
            street_address: schoolData.email,
            specialisation: schoolData.teacher_id,
            salary: schoolData.course_id,
        }),
      })
        .then((r) => r.json())
        .then((updatedItem) => {
          setStudentDetails(updatedItem)
          setSchoolData({
            name: '',
            email: '',
            teacher_id: '',
            course_id: '',
        })
          console.log(updatedItem)
        });
      }
    return(
        <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Edit A Student</h2>
          <form>
            <input
              type='text'
              required
              className ="field"
              placeholder='Student Name'
              value={schoolData.name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Student Email'
              value={schoolData.email}
              onChange={handleChange}
            ></input>
            <input
               type='text'
               placeholder="Course ID"
               className='field'
               value={schoolData.course_id}
              onChange={handleChange}
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Teacher ID'
               value={schoolData.teacher_id}
              onChange={handleChange}
           ></input>
          <button className="btn2" onClick={handleUpdateStudent}>Edit</button>
          </form>
        </div>
      </div>
	  </div>
    )
}

export default StudentSpecific;