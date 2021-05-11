import React, { useState } from 'react'
import '../header/header.css'
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import api from '../ApiSource/api'
// import Login from './components/LoginTeachers';

function MyPage() {
  

  return (
    <div className="StudentHeader">
      <Link to="/loginStudents/me"><li className="myPage">My Page</li></Link>
      
      <Link to="/lessons"><li className="lessonsLink">Lessons</li></Link>

    </div>
  );
}

export default MyPage;
