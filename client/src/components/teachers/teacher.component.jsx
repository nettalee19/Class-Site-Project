import React, { useEffect, useState } from "react";
//import axios from 'axios';
import api from "../ApiSource/api";
import LogoutBtn from "../header/LogoutBtn";
import Lessons from "../Lessons/lesson.component";
import MyLessons from "../Lessons/MyLesson.component";
import './teacher.css'

function Teacher() {
  const [teacher, setTeacher] = useState([]);
  const [token] = useState(localStorage.getItem("token"));
  const [save, setSave] = useState("Edit");
  const [isEdit, setIsEdit] = useState(false);
  const [name,setName] = useState("")

  const getTeacher = async () => {
    const data = await api.get("/teachers/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setTeacher(data.data);
    console.log(teacher);
  };

  const editTeacher = async (e) => {
    // const data = await api.get('/teachers/me',{
    //   headers: { Authorization: `Bearer ${token}` }
    // })
    const btn = e.target.value;
    console.log(btn);
    if (btn == "Save") {
      setSave("Edit");
      setIsEdit("false");
      console.log(name)
    } else {
      setSave("Save");
      setIsEdit("true");
    }
  };

  const deleteTeacher = async () => {
    //try{
    const data = await api.delete("/teachers/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.removeItem("token", data.token);
    console.log(data.token);

    // }catch(error){
    //   console.log("error")
    // }

    setTeacher(data.data);
    console.log(teacher);
  };

  // const logoutTeacher = async () =>{
  //   //   const data = await api.post('/teachers/logout',{
  //   //     headers: { Authorization: `Bearer ${token}` }
  //   //   })
  //   //   localStorage.removeItem("token", data.token)
  //   //   console.log(data.token)

  //   // setTeacher(data.data)
  //   // console.log(teacher)

  //   try{
  //     const data = await api.post('/teachers/logout')
  //     console.log(data.token)

  //   }catch(error){
  //     console.log("error")
  //   }
  // }

  useEffect(() => {
    getTeacher();
  }, []);


  const [photo, setPhoto] = useState('')
  // const photoSelect = (event) =>{
  //   setSelected(event)
  // }
  const photoUpload = async (e) =>{
    e.preventDefault();
    try{
      const data = await api.post('/me/avatar')
      setPhoto(data)
      console.log(data)

    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="TeacherMe">
      <div className="TeacherMeInfo">
        {/* <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/> */}
        {/* <p contenteditable={isEdit}>{teacher.name}</p> */}
        
        <p>{teacher.name}</p>
        <p>{teacher.age}</p>
        <p>{teacher.email}</p>
        {/* <p>{teacher.subjects}</p> */}
        {/* Teaches: {teacher.subjects.map(s => <>{s}, </>)} */}
        {/* &nbsp */}
        {/* <input type="button" value={save} onClick={editTeacher} /> */}
        <input type="button" value="Delete" onClick={deleteTeacher} /><br/>
        
        <input type="file" onChange={photoUpload}></input>

      </div>
      <div className="myLesson">

        {/* <input 
        type="button" 
        value="Log out"
        onClick={logoutTeacher}/> */}

        {/* <LogoutBtn/> */}
        <p>My classes:</p>
        {/* <Lessons/> */}
        <MyLessons teacher={teacher} key={teacher._id} />

      </div>
    </div>
  );
}

export default Teacher;
