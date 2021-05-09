// import styled from "styled-components"
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
        
          <Route >
            <Link to="/" className="homeLink">Home</Link>
          </Route>
        
        {/* <ul className="homeLink">
          <Route>
            <Link to="/"><li className="headerLink">Home</li></Link>
          </Route>
        </ul> */}

        <ul>
          <li>  </li>
        </ul>

      {!token && <LoginLink/>} 
      {token && <Welcome/>}

      
        {token &&<LogoutBtn/>} 
      
      
      </BrowserRouter> 

      {/* <LoginLink/> */}


    </div>
  );
}

// const LogOutStyle = styled.div`
//   background: darkgoldenrod;
//   height: 20px;
// `

export default Header;
