// import styled from "styled-components"
import React, { useState, useEffect } from 'react'
import '../header/header.css'
// import {  } from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import Login from './components/LoginTeachers';
import LoginLink from "./LoginLink"
import Welcome from "./Welcome"
import LogoutBtn from "./LogoutBtn"

function Header() {
  const [token] = useState(localStorage.getItem("token"));

  //aya@gmail.com hello123
  
  return (
    <div className="Header">

      
      
        
          
            <Link to="/" className="homeLink">Home</Link>
         
        
        {/* <ul className="homeLink">
          <Route>
            <Link to="/"><li className="headerLink">Home</li></Link>
          </Route>
        </ul> */}

        <ul>
          <li>  </li>
        </ul>

      {/* {!token && <Link to="/loginTeachers">Teachers</Link>}  */}
      {!token && <LoginLink/>} 
      {token && <Welcome/>}

      
      {/* {token &&<Link to="/loginTeachers/me">My Page</Link>}  */}

      {token &&<LogoutBtn/>} 
      
      
      
      

      {/* <LoginLink/> */}


    </div>
  );
}

// const LogOutStyle = styled.div`
//   background: darkgoldenrod;
//   height: 20px;
// `

export default Header;
