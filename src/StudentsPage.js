import React, { useEffect, useState } from 'react'
import StudentsForm from './StudentsForm';
import StudentsDetails from './StudentsDetails'
import { useNavigate } from 'react-router-dom';

function StudentPage(){
  const [allStudents, setAllStudents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://star-light-uni.herokuapp.com/students')
    .then(r => r.json())
    .then(data => setAllStudents(data))
  }, []);

  function handlePosting(data){
    setAllStudents([...allStudents, data])
  }

  function deleteStudent(id){
    fetch(`https://star-light-uni.herokuapp.com/students/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const goThru = allStudents.filter((teacher) => teacher.id !== id)
            setAllStudents(goThru)
        })
    navigate("/students")
    }

    function handleUpdateStudent(updatedStudent) {
      const updateStudent = allStudents.map((student) => {
        if (student.id === updateStudent.id) {
          return updateStudent;
        } else {
          return student;
        }
      });
      setAllStudents(updateStudent);
    }

  return (
    <div>
    
      <StudentsForm handlePosting={handlePosting} onUpdateStudent={handleUpdateStudent}/>
      <StudentsDetails allStudents = {allStudents} deleteStudent={deleteStudent}/>
    </div>
  )
}

export default StudentPage