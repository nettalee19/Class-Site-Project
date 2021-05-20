import React from 'react'
import '../header/header.css'
import {  Link } from 'react-router-dom';

// import Login from './components/LoginTeachers';

function MyPageTeacher() {
  

  return (
    <div className="StudentHeader">
      <Link to="/loginTeachers/me"><li className="myPage">My Page</li></Link>
      
      <Link to="/loginTeachers/me/addNewLesson"><li className="lessonsLink">Add a new Lesson</li></Link>

      <Link to="/lessons"><li className="lessonsLink">All Lessons</li></Link>

    </div>
  );
}

export default MyPageTeacher;
