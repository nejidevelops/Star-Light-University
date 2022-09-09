import React, { useEffect, useState } from 'react'
import TeachersDetails from './TeacherDetail';
import TeachersForm from './TeachersForm';

const TeachersPage = () => {
  const [allTeachers, setAllTeachers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/teachers')
    .then(r => r.json())
    .then(data => setAllTeachers(data))
  }, []);

  function handlePosting(data){
    setAllTeachers([...allTeachers, data])
  }

  function deleteTeacher(id){
    fetch(`/teachers/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const goThru = allTeachers.filter((teacher) => teacher.id !== id)
            setAllTeachers(goThru)
        })
    }

    function handleUpdateTeacher(updatedTeacher) {
      const updatedTeach = allTeachers.map((teacher) => {
        if (teacher.id === updatedTeacher.id) {
          return updatedTeacher;
        } else {
          return teacher;
        }
      });
      setAllTeachers(updatedTeach);
    }

  return (
    <div>
      <TeachersForm handlePosting={handlePosting} onUpdateTeach={handleUpdateTeacher}/>
      <TeachersDetails allTeachers = {allTeachers} deleteTeacher={deleteTeacher}/>
    </div>
  )
}

export default TeachersPage