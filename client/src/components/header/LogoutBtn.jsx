import React, { useState } from 'react'
import '../header/header.css'
// import Login from './components/LoginTeachers';

function LogoutBtn() {
  const [token] = useState(localStorage.getItem("token"));

  const logoutTeacher = async () =>{
    // localStorage.removeItem("token", token)
    // console.log("no one is in the system")


    // try{
    //   const data = await api.post('/teachers/logout')
    //   console.log(data)

    // }catch(error){
    //   console.log(error)
    // }

    try{
      localStorage.removeItem("token", token)
      console.log("no one is in the system")
    }catch(e){
      console.log(e)
    }finally{
      window.location.reload()
    }
  }

  return (
    <div>
      <button  className="LogoutBtn"
      value="Log Out"
      onClick={logoutTeacher}>
          Log Out
      </button>

    </div>
  );
}

export default LogoutBtn;
