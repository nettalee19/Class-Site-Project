import React, {useState, useEffect} from 'react'
import api from "../ApiSource/api";

function DeleteBtn({id,deleteLesson}) {
  const [token] = useState(localStorage.getItem("token"));

  const DeleteLesson = async () =>{
    console.log(id)
        // const {id}=useParams();
    
        // const oneLesson=lesson.filter(l=>l.id===id)

        try{
          const data = await api.delete(`/class/${id}`,{
            headers: { Authorization: `Bearer ${token}` },
          })
          // localStorage.removeItem("token", data.token)
        }catch(error){
          console.log(error.response)
        }
      
        //setTeacher(data.data)
        //console.log(teacher)
      }

      useEffect(() =>{
        
      }, [DeleteLesson])

    return (
        <div>
            <button onClick={deleteLesson} className="deleteClassBtn">Delete Class</button>
        </div>
    )
}

export default DeleteBtn
