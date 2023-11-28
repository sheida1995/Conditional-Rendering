import React from 'react'
import CourseCart from './CourseCart';

const CourseList = () => {
  const courses = [
    { id: 1, name: "sheida" , description:"this is an programing website" },
    { id: 2, name: "zar" , description:"this is an programing website" },
    { id: 3, name: "saz" , description:"this is an programing website" },
    { id: 4, name: "red" , description:"this is an programing website"},
  ];
  return (
    <div>
      <h3>course list</h3>
      <ul>
        {courses.map((course) => (
          <CourseCart key={course.id} data={course} />
        ))} 
      </ul>
    </div>
  )
}

export default CourseList

