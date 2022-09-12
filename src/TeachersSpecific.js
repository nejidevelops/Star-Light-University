import React from "react";
import { useEffect,useParams, useState } from "react";

function TeachersSpecific(){
    const { id } = useParams();
    const [teacherDetails, setTeacherDetails] = useState();
    const [schoolData, setSchoolData] = useState({
        name: '',
        home_address: '',
        specialisation: '',
        salary_receiving: '',
    })


    function handleChange(e){
        setSchoolData({
            ...schoolData, [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        fetch(`/teachers/${id}`)
        .then(r => r.json())
        .then(data => setTeacherDetails(data))
    }, [])

    console.log(teacherDetails)

    function handleUpdateTeacher() {
        fetch(`https://star-light-uni.herokuapp.com/teachers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: schoolData.name,
            street_address: schoolData.home_address,
            specialisation: schoolData.specialisation,
            salary_receiving: schoolData.salary,
        }),
      })
        .then((r) => r.json())
        .then((updatedItem) => {
          setTeacherDetails(updatedItem)
          setSchoolData({
            name: '',
            home_address: '',
            specialisation: '',
            salary_receiving: '',
        })
          console.log(updatedItem)
        });
      }
    return(
        <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Add A Teacher</h2>
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
               placeholder="Specialisation"
               className='field'
               value={schoolData.specialisation}
              onChange={handleChange}
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Salary Received'
               value={schoolData.salary_receiving}
              onChange={handleChange}
           ></input>
          <button className="btn2" onClick={handleUpdateTeacher}>Edit</button>
          </form>
        </div>
      </div>
	  </div>
    )
}

export default TeachersSpecific;