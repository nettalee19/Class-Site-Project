import React from 'react'
import '../header/header.css'
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

function Header() {
  
  return (
    <div className="Header">
      <BrowserRouter>
        <ul>
          <li>Coffee </li>
          <li>Coffee </li>
          <li>Coffee </li>
        </ul>
        <ul className="SigninLogin">
          <li className="headerLink"><Link>Sign In</Link></li>
          <li className="headerLink"><Link>Login</Link></li>
        </ul>
      </BrowserRouter>

    </div>
  );
}

export default Header;
