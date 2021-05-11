import React, { useEffect, useState} from 'react'
// import './App.css';
// import { Route } from 'react-router';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import Student from './components/students/user.component';
import Lesson from './components/Lessons/lesson.component';
import FavLessons from './components/Lessons/FavLessons';
import Teacher from './components/teachers/teacher.component';
import Header from './components/header/Header';
import AddNewLesson from './components/Lessons/AddNewLesson';

import LoginTeachers from './components/LoginTeachers';
import LoginStu from './components/LoginStudents';
import SignUpStudents from './components/SignUpStudents';
import SignUpTeachers from './components/SignUpTeachers';

import axios from 'axios';
import api from './components/ApiSource/api'
import EditLesson from './components/Lessons/EditLesson'
import Main from './components/MainPage/MainContent'
import Second from './components/MainPage/Second'
import Footer from './components/Footer/Footer'
import 'semantic-ui-css/semantic.min.css'

// import './components/MainPage/Main.css'


function App() {
  const [teacher, setTeacher] = useState(null)
  const [user, setUser] = useState(null)
  
  const [lesson, setLesson] = useState([])
  const [favoriteLessons, setFavoriteLessons] = useState([])

  const [token] = useState(localStorage.getItem("token"));

  // const getLesson = async () =>{
  //   try{
  //     const {data} = await api.get("/class")
  //     setLesson(data)
  //     console.log(data)

  //   } catch(error){
  //     console.log(error)
  //   }
  // }
  // getLesson()

  

  // useEffect(() => {
  //   getLesson()
  // }, [])


  useEffect(() => {
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

    const getUser = async () =>{
      try{
        const {data} = await api("/users/me",{
          headers: { Authorization: `Bearer ${token}` },
        })
        setUser(data)
        console.log(data)
      } catch(error){
        console.log("error")
      }
    }

    const getLesson = async () =>{
      const data = await axios.get('http://localhost:8000/class')
      console.log(data)
      //setUser(data.data)
      setLesson(data.data)
    }


    getLesson()


    if(token){
      getTeacher()
      getUser()
      // console.log(token)
    }
  }, [])

  const onAdd =(lesson) =>{
    const exist = favoriteLessons.find(x => x._id === lesson._id)
    if(!exist){
      setFavoriteLessons([...favoriteLessons, {...lesson}])
      // setFavoriteLessons([...favoriteLessons, {...lesson}])
    }
    console.log(lesson._id)
    console.log(favoriteLessons)
  }
  const onRemove =(lesson) =>{
    const exist = favoriteLessons.find(x => x._id === lesson._id)
    if(exist){
      setFavoriteLessons(favoriteLessons.filter((x) => x._id !== lesson._id))
    }
  }

  // const getTeacher = async () =>{
  //   const data = await axios.get('http://localhost:8000/users')
  //   setUser(data.data)
  // }
  
  // useEffect(() => {
  //   getUser()
  //   console.log(user)
  // }, [])

  

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
        <Header/>
        
        <Switch>

          <Route exact path="/" component={Main}>
        
          </Route>

          <Route exact path="/loginTeachers" component={LoginTeachers}>
            {/* <LoginTeachers/> */}
          </Route>

          <Route exact path='/loginTeachers/me' component={Teacher}>
            {/* <Teacher/> */}
          </Route>
          <Route exact path="/signUpTeach" component={SignUpTeachers}>
            {/* <LoginTeachers/> */}
          </Route>


          <Route exact path='/loginTeachers/me/addNewLesson' component={AddNewLesson}>
            {/* <AddNewLesson/> */}
          </Route>

          <Route exact path="/loginStudents" component={LoginStu}>
            {/* <LoginTeachers/> */}
          </Route>

          <Route exact path="/signUpStu" component={SignUpStudents}>
            {/* <LoginTeachers/> */}
          </Route>

          <Route exact path='/loginStudents/me' component={Student}>
            {/* <Teacher/> */}
          </Route>

          <Route exact path='/lessons'>
            <Lesson lesson={lesson} onAdd={onAdd}/>
            <FavLessons favoriteLessons={favoriteLessons} onAdd={onAdd} onRemove={onRemove}/>
          </Route>
            

          <Route path="/favorites" exact >
            <FavLessons favoriteLessons={favoriteLessons} onAdd={onAdd} onRemove={onRemove}/>

            {/* <div className="grid">
            {setSaved.length
              ? saved.map((item, index) => {
                // return <Card item={item} key={index} onClick={() => {
                  return <Lesson item={item} key={index} onClick={() => {
                    const newSaved = saved.filter(i => item !== i);
                    setSaved(newSaved);
                  // }} onView={() => {
                    // setCurrentData(item);
                    //setRedirect('/');
                  }} />;
                })
              : null}
            </div> */}

          </Route>


        </Switch>

        <Footer/>

      </div>
        
    </BrowserRouter>

  );
}

export default App;
