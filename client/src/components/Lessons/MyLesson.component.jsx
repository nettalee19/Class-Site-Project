import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../Lessons/lessons.css'
import api from '../ApiSource/api'
import DeleteBtn from './DeleteBtn'


function Lesson({teacher}) {
  const [lesson, setLesson] = useState([])
  const [deleteItem, setDeleteItem] = useState("")
  const [token] = useState(localStorage.getItem("token"));

  const getLesson = async () =>{
    const data = await axios.get('http://localhost:8000/class')
    console.log(data)
    //setUser(data.data)
    setLesson(data.data)
  }

  // const deleteLesson = async () =>{
  //   //try{
  //     //const data = await api.delete(`/class/:id`)
  //     //localStorage.removeItem("token", data.token)
  //     console.log(lesson)

  //   // }catch(error){
  //   //   console.log("error")
  //   // }
  
  //   //setTeacher(data.data)
  //   //console.log(teacher)
  // }
 
  useEffect(() => {
    getLesson()
  }, [deleteItem])

  const deleteLesson2 = async (id)=>{
    console.log(id)
    try{
       await api.delete(`/class/${id}`,{
        headers: { Authorization: `Bearer ${token}` },
      })
      setDeleteItem(id)
      
    }catch(error){
      console.log(error.response)
    }
  }
  return (
    <div className="Lesson">

          {/* {`Lessons: ${lesson}`} */}
        <div className="lessons">
          
        {lesson.map(l =>{
          // console.log(teacher._id)
          // console.log(l.owner)
          if (l.owner === teacher._id){
            return <>
             <div className="lessonBox">
              <h4>{l.name}</h4>
              <p>{l.description}</p>
              <div className="deletBtn">
                <DeleteBtn id={l._id}  deleteLesson={ () => deleteLesson2(l._id)}/>

              </div>
            </div> 
          </>

          }
        })}

        </div>
      
    </div>
  );
}

export default Lesson;
