import React, {useEffect, useState} from 'react'
//import axios from 'axios';
import api from '../ApiSource/api'

function Teacher() {
  const [teacher, setTeacher] = useState([])
  const [token] = useState(localStorage.getItem("token"));

  const getTeacher = async () =>{
    const data = await api.get('/teachers/me',{
      headers: { Authorization: `Bearer ${token}` }
    })
  
    setTeacher(data.data)
    console.log(teacher)
  }
  const editTeacher = async () =>{
    // const data = await api.get('/teachers/me',{
    //   headers: { Authorization: `Bearer ${token}` }
    // })
  
    // setTeacher(data.data)
    console.log(teacher)
  }

  useEffect(() => {
    getTeacher()
    
  }, [])


  return (
    <div className="TeacherMe">

      <p>{teacher.name}</p>
      <p>{teacher.age}</p>
      <p>{teacher.email}</p>
      {/* <p>{teacher.subjects}</p> */}
      {/* Teaches: {teacher.subjects.map(s => <>{s}, </>)} */}

      <input 
      type="button" 
      value="Edit"
      onClick={editTeacher}/>
      
    </div>
  );
}

export default Teacher;
