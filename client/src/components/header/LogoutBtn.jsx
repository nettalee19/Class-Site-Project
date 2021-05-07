import React, { useState } from 'react'
import '../header/header.css'
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import api from '../ApiSource/api'
// import Login from './components/LoginTeachers';

function LogoutBtn() {
  const [token] = useState(localStorage.getItem("token"));

  const logoutTeacher = async () =>{
    try{
      const data = await api.post('/teachers/logout')
      console.log(data.token)

    }catch(error){
      console.log("error")
    }
  }

  return (
    <div className="LogoutBtn SigninLogin homeLink">
      <input 
      type="button" 
      value="Log Out"
      onClick={logoutTeacher}/>

    </div>
  );
}

export default LogoutBtn;
