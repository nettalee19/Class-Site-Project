import React from 'react'
import '../header/header.css'
import {  Link } from 'react-router-dom';

// import Login from './components/LoginTeachers';

function MyPageTeacher() {
  

  return (
    <div className="StudentHeader">
      <Link to="/loginTeachers/me"><li className="myPage">My Page</li></Link>
      
      <Link to="/lessons"><li className="lessonsLink">Lessons</li></Link>

    </div>
  );
}

export default MyPageTeacher;
