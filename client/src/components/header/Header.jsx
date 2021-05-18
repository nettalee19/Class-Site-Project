// import styled from "styled-components"
import React, { useState, useEffect } from 'react'
import '../header/header.css'
import { Link } from 'react-router-dom';
// import Login from './components/LoginTeachers';
import LoginLink from "./LoginLink"
import Welcome from "./Welcome"
import MyPage from "./MyPage"
import LogoutBtn from "./LogoutBtn"
import api from '../ApiSource/api'

function Header() {
  const [token] = useState(localStorage.getItem("token"));
  const [teacher, setTeacher] = useState(null)

  const getTeacher = async () =>{
    try{
      const {data} = await api("/teachers/me",{
        headers: { Authorization: `Bearer ${token}` },
      })
      setTeacher(data)
      console.log(data)
    } catch(error){
      console.log("error")
    }

    
  }
  getTeacher()

  //aya@gmail.com hello123
  
  return (
    <div className="Header">




      {/* <Link to="/" >Home</Link> */}
          
      {/* <Link to="/" >Home</Link> */}
      <Link to="/" className="HeaderHome">Home</Link>
         
      
      {!token && <LoginLink/>} 
      {/* {token && <Welcome/>}
      {token && <Welcome/>} */}

      
      {/* {token &&<Link to="/loginTeachers/me">My Page</Link>}  */}

       
      {/* {token &&<LogoutBtn/>} */}

      {/* {token && (teacher.isTeacher == false) &&<MyPage/>}  */}
      {token && <MyPage/>} 


      {token &&<LogoutBtn/>} 
      
      
     


    </div>
  );
  // return (
  //   <div className="Header">

      
      
  //       {/* <Link to="/" >Home</Link> */}
          
  //       <Link to="/" >Home</Link>
         
        
  //       {/* <ul className="homeLink">
  //         <Route>
  //           <Link to="/"><li className="headerLink">Home</li></Link>
  //         </Route>
  //       </ul> */}

  //       {/* <ul>
  //         <li>  </li>
  //       </ul> */}

  //     {/* {!token && <Link to="/loginTeachers">Teachers</Link>}  */}
  //     {!token && <LoginLink/>} 
  //     {token && <Welcome/>}

      
  //     {/* {token &&<Link to="/loginTeachers/me">My Page</Link>}  */}

  //     {token &&<LogoutBtn/>} 
      
      
      
      

  //     {/* <LoginLink/> */}


  //   </div>
  // );
}

// const LogOutStyle = styled.div`
//   background: darkgoldenrod;
//   height: 20px;
// `

export default Header;
