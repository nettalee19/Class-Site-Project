import React, { useEffect, useState } from "react";
//import axios from 'axios';
import api from "../ApiSource/api";
import LogoutBtn from "../header/LogoutBtn";
import Lessons from "../Lessons/lesson.component";
import MyLessons from "../Lessons/MyLesson.component";

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

  return (
    <div className="TeacherMe">
      <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
      <p contenteditable={isEdit}>{teacher.age}</p>
      <p contenteditable={isEdit}>{teacher.email}</p>
      {/* <p>{teacher.subjects}</p> */}
      {/* Teaches: {teacher.subjects.map(s => <>{s}, </>)} */}
      {/* &nbsp */}
      <input type="button" value={save} onClick={editTeacher} />

      <input type="button" value="Delete" onClick={deleteTeacher} />

      {/* <input 
      type="button" 
      value="Log out"
      onClick={logoutTeacher}/> */}

      {/* <LogoutBtn/> */}
      <p>My classes:</p>
      {/* <Lessons/> */}
      <MyLessons teacher={teacher} key={teacher._id} />
    </div>
  );
}

export default Teacher;
