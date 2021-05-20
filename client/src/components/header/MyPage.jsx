import React from 'react'
import '../header/header.css'
import {  Link } from 'react-router-dom';

// import Login from './components/LoginTeachers';

function MyPage() {
  

  return (
    <div className="StudentHeader">
      <Link to="/loginStudents/me"><li className="myPage">My Page</li></Link>
      
      <Link to="/lessons"><li className="lessonsLink">All Lessons</li></Link>

    </div>
  );
}

export default MyPage;
