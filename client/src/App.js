import React, { useEffect, useState} from 'react'
// import './App.css';
// import { Route } from 'react-router';
import { BrowserRouter, Switch,  Route, Redirect } from 'react-router-dom';
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
import Main from './components/MainPage/MainContent'
import Footer from './components/Footer/Footer'
import 'semantic-ui-css/semantic.min.css'

// import './components/MainPage/Main.css'


function App() {
  const [teacher, setTeacher] = useState(null)
  const [user, setUser] = useState([])
  
  const [lesson, setLesson] = useState([])
  const [favoriteLessons, setFavoriteLessons] = useState([])

  const [token] = useState(localStorage.getItem("token"));

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

    console.log("Token from useeffect", token)
    if(token){
      getTeacher()
      getUser()
      // console.log(token)
    }
  }, [token])

  const onAdd = async(lesson) => {
    console.log(lesson)

    const config = {
			headers: { Authorization: `Bearer ${token}` }
		};
		const bodyParameters = {
		   title:lesson.name,
		   description:lesson.description
		};

    const exist = favoriteLessons.find(x => x._id === lesson._id)  
		if(!exist){
      await api.post( 
        '/users/me/addtofav',
        bodyParameters,
        config
      ).then(console.log).catch(console.log());

    }


    // const exist = favoriteLessons.find(x => x._id === lesson._id)
    // if(!exist){
    //   setFavoriteLessons([...favoriteLessons, {...lesson}])
      // await api.post("/users/me/addtofav", {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
    // }
    // console.log(lesson._id)
    // console.log(favoriteLessons)
  }
  const onRemove = async (title) =>{
    await api.delete( 
      'users/me/removefav',{
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          title
        }
      });
    // const exist = favoriteLessons.find(x => x._id === lesson._id)  
		// if(!exist){
    // const config = {
		// 	headers: { Authorization: `Bearer ${token}` }
		// };
		// const bodyParameters = {
		//    title:lesson.name,
		//    description:lesson.description
		// };

    // const exist = favoriteLessons.find(x => x._id === lesson._id)
		// if(!exist){
      // await api.delete( 
      //   '/users/me/removefav',
      //   bodyParameters,
      //   config
      // ).then(console.log).catch(console.log());

    //}
    
    
    // const exist = favoriteLessons.find(x => x._id === lesson._id)
    // if(exist){
    //   setFavoriteLessons(favoriteLessons.filter((x) => x._id !== lesson._id))
    // }

    // await api.delete("/users/me/removefav", {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
  }


  return (
    <BrowserRouter>
      <div>
        <Header/>
        
        <Switch>

          <Route exact path="/" component={Main}>
        
          </Route>

          {/* <Route exact path="/loginTeachers" component={LoginTeachers}> */}
          <Route exact path="/loginTeachers" 
            render={() =>
            
              token ? <Redirect to="/" /> : <LoginTeachers/>
            }
            
           /> 
            
          

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

          <Route exact path='/loginStudents/me' >
            {/* <Teacher/> */}
            <Student/>
            <FavLessons favoriteLessons={favoriteLessons} onAdd={onAdd} onRemove={onRemove} lesson={lesson}/>
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
