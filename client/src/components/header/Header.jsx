import React from 'react'
import '../header/header.css'
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
// import Login from './components/LoginTeachers';

function Header() {
  
  return (
    <div className="Header">
      <BrowserRouter>
        
        
        <ul>
          <li>Coffee </li>
          
        </ul>

        <ul>
          <li>Coffee </li>
          <li>Coffee </li>
          <li>Coffee </li>
        </ul>



        <ul className="SigninLogin">
          <Route>
          <li className="headerLink"><Link to="/loginTeachers">Sign In</Link></li>

          </Route>


          
          <li className="headerLink"><Link>Login</Link></li>
          


        </ul>
      </BrowserRouter>

    </div>
  );
}

export default Header;
