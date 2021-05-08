import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../Lessons/lessons.css'

function Lesson({teacher}) {
  const [lesson, setLesson] = useState([])

  const getLesson = async () =>{
    const data = await axios.get('http://localhost:8000/class')
    console.log(data)
    //setUser(data.data)
    setLesson(data.data)
  }

  useEffect(() => {
    getLesson()
  }, [])


  return (
    <div className="Lesson">

          {/* {`Lessons: ${lesson}`} */}
        <div className="lessons">
          
        {lesson.map(l =>{
          console.log(teacher._id)
          console.log(l.owner)
          if (l.owner === teacher._id){
            return <>
             <div className="lessonBox">
              <h4>{l.name}</h4>
              <p>{l.description}</p>
            </div> 
          </>

          }
        })}

        </div>
      
    </div>
  );
}

export default Lesson;
