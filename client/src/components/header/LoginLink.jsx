import React from 'react'
import '../header/header.css'
import { Link } from 'react-router-dom';
// import Login from './components/LoginTeachers';

function LoginLink() {
  
  return (
    <div className="LoginLink">
      

        <ul className="SigninLogin homeLink">
          
          <Link to="/loginTeachers"><li className="headerLink">Teachers</li></Link>
         


          
          <Link to="/loginStudents"><li className="headerLink">Students</li></Link>


        </ul>
     

    </div>
  );
}

export default LoginLink;
