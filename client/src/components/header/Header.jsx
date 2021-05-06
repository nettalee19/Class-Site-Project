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
          <li>Cof </li>
          
        </ul>

        <ul>
          <li>Coe </li>
          <li>Co </li>
          <li>C </li>
        </ul>



        <ul className="SigninLogin">
          <Route>
          <li className="headerLink"><Link to="/loginTeachers">Teachers</Link></li>

          </Route>


          
          <li className="headerLink"><Link>Students</Link></li>
          


        </ul>
      </BrowserRouter>

    </div>
  );
}

export default Header;
