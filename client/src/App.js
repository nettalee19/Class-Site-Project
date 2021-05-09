import React, { useEffect, useState} from 'react'
import './App.css';
// import { Route } from 'react-router';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import User from './components/students/user.component';
import Lesson from './components/Lessons/lesson.component';
import Teacher from './components/teachers/teacher.component';
import Header from './components/header/Header';
import AddNewLesson from './components/Lessons/AddNewLesson';
import LoginTeachers from './components/LoginTeachers';
import LoginStu from './components/LoginStudents';
import axios from 'axios';
import api from './components/ApiSource/api'
import EditLesson from './components/Lessons/EditLesson'
import Main from './components/MainPage/MainContent'
import Second from './components/MainPage/Second'
import Footer from './components/Footer/Footer'
import 'semantic-ui-css/semantic.min.css'

// import './components/MainPage/Main.css'


function App() {
  const [user, setUser] = useState(null)

  const [token] = useState(localStorage.getItem("token"));

  // const getUser = async () =>{
  //   const data = await axios.get('http://localhost:8000/users')
  //   setUser(data.data)
  // }
  
  // useEffect(() => {
  //   getUser()
  //   console.log(user)
  // }, [])
  
  useEffect(() => {
    const getUser = async () =>{
      try{
        const {data} = await api("/teachers/me",{
          headers: { Authorization: `Bearer ${token}` },
        })
        setUser(data)
        console.log(data)
      } catch(error){
        console.log("error")
      }
    }
    if(token){
      getUser()
      // console.log(token)
    }
  }, [])

  // const getUser = async () =>{
  //   try{
  //     const {data} = await api("/teachers/me",{
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     setUser(data)
  //     console.log(data)
  //   } catch(error){
  //     console.log("error")
  //   }
  // }
  // if(token){
  //   getUser()
  //   // console.log(token)
  // }


  return (
    <BrowserRouter>
    <div>
        {/* <Route exact path='/' component={Header} /> */}
        <Header/>
      
        <Switch>

          <Route exact path='/' component={Main}>
            {/* <Main/> */}
            {/* <Second/> */}
            
          </Route>

          <Route exact path='/lessons' component={Lesson}>
            {/* <Lesson/> */}
          </Route>

          {/* <Route exact path='/' component={Lesson} />
          <Route exact path='/' component={Teacher} /> */}
          
          <Route exact path='/loginTeachers' component={LoginTeachers}>
            
          </Route>

          <Route exact path='/loginTeachers/me' component={Teacher}>
            {/* <Teacher/> */}
          </Route>


          <Route exact path='/loginTeachers/me/addNewLesson' component={AddNewLesson}>
            {/* <AddNewLesson/> */}
          </Route>

          {/* <Route exact path='/loginTeachers/me/editLesson'>
              <EditLesson/>
           </Route> */}

          {/* <Route exact path='/'>
            <LoginStu/>
          </Route> */}


        </Switch>
        


        <Footer/>
        {/* {`Hello ${user}`} */}
        
        
    </div>
  </BrowserRouter>

  );
}

export default App;
