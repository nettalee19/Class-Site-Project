import React, {useEffect, useState} from 'react'
import '../Lessons/lessons.css'


function Lesson(props) {
  const {favoriteLessons, onRemove} = props
  //const {lesson, onRemove} = props
  
  return (
    <div className="FavLesson">
      {favoriteLessons.length === 0 && <div>You don't have any favorite lessons</div>}
      
      {favoriteLessons.map((lesson) =>{
        
        return (<div  className="FavLessonBox">
          <h4>{lesson.name}</h4>
          <p>{lesson.description}</p>
          <button onClick={() => onRemove(lesson)}>Remove</button>
          
        </div>)
      })}

      
    </div>
  );
}

export default Lesson;
