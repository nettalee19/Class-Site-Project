import React, { useState } from 'react'
import '../header/header.css'
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
// import Login from './components/LoginTeachers';
import LoginLink from "./LoginLink"
import Welcome from "./Welcome"
import LogoutBtn from "./LogoutBtn"

function Header() {
  const [token] = useState(localStorage.getItem("token"));
  
  return (
    <div className="Header">

      
      <BrowserRouter>
        
        
        <ul className="homeLink">
        <Route>
        <li className="headerLink"><Link to="/">Home</Link></li>

          </Route>
          
        </ul>

        <ul>
          <li>Coe </li>
          <li>Co </li>
          <li>C </li>
        </ul>

      </BrowserRouter> 
      {/* <LoginLink/> */}

      {!token && <LoginLink/>} 
      {token && <Welcome/>} 
      {token &&<LogoutBtn/>} 

    </div>
  );
}

export default Header;
