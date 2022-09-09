import React, { useEffect, useState } from 'react'
import StudentsForm from './StudentsForm';
import StudentsDetails from './StudentsDetails'

function StudentPage(){
  const [allStudents, setAllStudents] = useState([])

  useEffect(() => {
    fetch('/students')
    .then(r => r.json())
    .then(data => setAllStudents(data))
  }, []);

  // console.log(allTeachers)

  function handlePosting(data){
    setAllStudents([...allStudents, data])
  }

  function deleteStudent(id){
    fetch(`/students/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const filterCourses = allStudents.filter((teacher) => teacher.id !== id)
            setAllStudents(filterCourses)
        })
    }

    function handleUpdateStudent(updatedStudent) {
      const updatedStude = allStudents.map((student) => {
        if (student.id === updatedStudent.id) {
          return updatedStudent;
        } else {
          return student;
        }
      });
      setAllStudents(updatedStudent);
    }

  return (
    <div>
      <StudentsForm handlePosting={handlePosting} onUpdateTeach={handleUpdateStudent}/>
      <StudentsDetails allStudents = {allStudents} deleteStudent={deleteStudent}/>
    </div>
  )
}

export default StudentPage