import React, { useState } from 'react'
import '../header/header.css'
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import api from '../ApiSource/api'
// import Login from './components/LoginTeachers';

function LogoutBtn() {
  const [token] = useState(localStorage.getItem("token"));

  const logoutTeacher = async () =>{
    localStorage.removeItem("token", token)
    console.log("no one is in the system")
    // try{
    //   const data = await api.post('/teachers/logout')
    //   console.log(data)

    // }catch(error){
    //   console.log(error)
    // }
  }

  return (
    <div className="LogoutBtn">
      <button 
      value="Log Out"
      onClick={logoutTeacher}>
          Log Out
      </button>

    </div>
  );
}

export default LogoutBtn;
