import React, {useEffect, useState} from 'react'
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import '../Lessons/lessons.css'
import api from '../ApiSource/api'
import DeleteBtn from './DeleteBtn'
import EditLesson from '../Lessons/EditLesson'

function Lesson(props) {
  const {favoriteLessons, onRemove} = props
  //const {lesson, onRemove} = props
  
  return (
    <div className="FavLesson">
      {favoriteLessons.length === 0 && <div>You don't have any favorite lessons</div>}
      
      {favoriteLessons.map((lesson) =>{
        
        return (<div>
          <div>{lesson.name}</div>
          <div>{lesson.description}</div>
          <button onClick={() => onRemove(lesson)}>Remove</button>
        </div>)
      })}

      {/* <Link to="/"></Link> */}
    </div>
  );
}

export default Lesson;
