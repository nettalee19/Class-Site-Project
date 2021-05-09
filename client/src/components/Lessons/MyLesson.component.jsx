import React, {useEffect, useState} from 'react'
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import '../Lessons/lessons.css'
import api from '../ApiSource/api'
import DeleteBtn from './DeleteBtn'
import EditLesson from '../Lessons/EditLesson'

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
    // const {id}=useParams();

    // const oneLesson=lesson.filter(l=>l.id===id)
    try{
       await api.delete(`/class/${id}`,{
        headers: { Authorization: `Bearer ${token}` },
      })
      setDeleteItem(id)
      // localStorage.removeItem("token", data.token)
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
              
              <DeleteBtn id={l._id} deleteLesson={ () => deleteLesson2(l._id)}/>
              {/* <DeleteBtn lesson={lesson} key={l._id}/> */}

              {/* <BrowserRouter> */}
              {/* <button onClick={deleteLesson}>Delete Class</button> */}
              {/* <button>Edit Class</button> */}

              {/* <Route>
                  <Link to="/loginTeachers/me/editLesson" component={EditLesson}><button>Edit Class</button></Link>
              </Route> */}

                {/* <Route exact path='/loginTeachers/me/editLesson'>
                  <EditLesson/>
                </Route> */}
           
              {/* </BrowserRouter> */}
            </div> 
          </>

          }
        })}

        </div>
      
    </div>
  );
}

export default Lesson;
