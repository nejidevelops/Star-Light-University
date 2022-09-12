import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseApplication from './CourseApplication';
import CourseDetails from "./CourseDetailsPage";

function CoursePage(){
    const [allCourses, setAllCourses] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      fetch('https://star-light-uni.herokuapp.com/courses')
      .then(r => r.json())
      .then(data => setAllCourses(data))
    }, []);

    function handlePosting(data){
      setAllCourses([...allCourses, data])
    }

    function deleteCourse(id){
      fetch(`https://star-light-uni.herokuapp.com/courses/${id}`,{
          method: "DELETE",
      })
      .then(r => r.json())
      .then(() => {
          const goThru = allCourses.filter((course) => course.id !== id)
              setAllCourses(goThru)
          })
    }

    function handleUpdateCourse(updateCourse) {
      const updatedCourse = allCourses.map((course) => {
        if (course.id === updatedCourse.id) {
          return updatedCourse;
        } else {
          return course;
        }
      });
      setAllCourses(updatedCourse);
    }

    return (
      <div>
        <CourseApplication handlePosting={handlePosting}/>
        <CourseDetails allCourses ={allCourses} deleteCourse={deleteCourse}/>
      </div>
  )
}

export default CoursePage