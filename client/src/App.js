import React, { useEffect, useState} from 'react'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import User from './components/user.component';
import Lesson from './components/lesson.component';
import Header from './components/Header';
import Login from './components/LoginTeachers';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null)

  const getUser = async () =>{
    const data = await axios.get('http://localhost:8000/users')
    setUser(data.data)
  }
  
  useEffect(() => {
    getUser()
    console.log(user)
  }, [])

  return (
    <div>
      <BrowserRouter>
    
        <Route exact path='/' component={Header}  />
        <Route exact path='/' component={User} />
        <Route exact path='/' component={Lesson} />
        <Route exact path='/loginTeachers' component={Login} user={user}/>
        {/* {`Hello ${user}`} */}
        
        
      </BrowserRouter>

    </div>
  );
}

export default App;
