import React, { useEffect, useState} from 'react'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import User from './components/students/user.component';
import Lesson from './components/Lessons/lesson.component';
import Teacher from './components/teachers/teacher.component';
import Header from './components/header/Header';
import AddNewLesson from './components/Lessons/AddNewLesson';
import Login from './components/LoginTeachers';
import axios from 'axios';
import api from './components/ApiSource/api'



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


  return (
    <BrowserRouter>
    <div>
        {/* <Route exact path='/' component={Header} /> */}
        <Header/>
      
        <Switch>
          <Route exact path='/lessons' >
            <Lesson/>
          </Route>
          
          {/* <Route exact path='/' component={Lesson} />
          <Route exact path='/' component={Teacher} /> */}
          
          <Route exact path='/loginTeachers'>
            <Login/>
          </Route>

          <Route exact path='/loginTeachers/me' >
            <Teacher/>
          </Route>


          <Route exact path='/loginTeachers/me/addNewLesson'>
            <AddNewLesson/>
          </Route>


        </Switch>
        {/* {`Hello ${user}`} */}
        
        
    </div>
      </BrowserRouter>

  );
}

export default App;
