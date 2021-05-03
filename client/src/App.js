import React from 'react'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import User from './components/user.component';
import Lesson from './components/Lessons/lesson.component';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div>
      <BrowserRouter>
    
        <Route exact path='/' component={Navbar} />
        <Route exact path='/' component={User} />
        <Route exact path='/' component={Lesson} />
        
      </BrowserRouter>

    </div>
  );
}

export default App;
