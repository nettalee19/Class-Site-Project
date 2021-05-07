import React from 'react'
import '../header/header.css'
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
// import Login from './components/LoginTeachers';

function LoginLink() {
  
  return (
    <div className="LoginLink">
      <BrowserRouter>

        <ul className="SigninLogin homeLink">
          <Route>
          <Link to="/loginTeachers"><li className="headerLink">Teachers</li></Link>

          </Route>


          
          <li className="headerLink"><Link>Students</Link></li>
          


        </ul>
      </BrowserRouter>

    </div>
  );
}

export default LoginLink;
