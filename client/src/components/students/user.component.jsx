import React, { useEffect, useState } from "react";
//import axios from 'axios';
import api from "../ApiSource/api";
import LogoutBtn from "../header/LogoutBtn";
import Lessons from "../Lessons/lesson.component";
import MyLessons from "../Lessons/MyLesson.component";
// import './teacher.css'

function Teacher() {
  const [student, setStudent] = useState([]);
  const [token] = useState(localStorage.getItem("token"));
  
  const [save, setSave] = useState("Edit");
  const [isEdit, setIsEdit] = useState(false);
  const [name,setName] = useState("")

  const getTeacher = async () => {
    const data = await api.get("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setStudent(data.data);
    console.log(student);
  };

  // const editTeacher = async (e) => {
  //   // const data = await api.get('/teachers/me',{
  //   //   headers: { Authorization: `Bearer ${token}` }
  //   // })
  //   const btn = e.target.value;
  //   console.log(btn);
  //   if (btn == "Save") {
  //     setSave("Edit");
  //     setIsEdit("false");
  //     console.log(name)
  //   } else {
  //     setSave("Save");
  //     setIsEdit("true");
  //   }
  // };

  const deleteStudent = async () => {
    //try{
    const data = await api.delete("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.removeItem("token", data.token);
    console.log(data.token);

    // }catch(error){
    //   console.log("error")
    // }

    setStudent(data.data);
    console.log(student);
  };



  useEffect(() => {
    getTeacher();
  }, []);

  return (
    <div className="TeacherMe">
      <div className="TeacherMeInfo">
        
        <p>{student.name}</p>
        <p>{student.age}</p>
        <p>{student.email}</p>
    

        <input type="button" value="Delete" onClick={deleteStudent} />

      </div>
      <div className="myLesson">

        
        <p>My Favorite classes:</p>
        
        {/* <MyLessons student={student} key={student._id} /> */}

      </div>
    </div>
  );
}

export default Teacher;



// import React, {useEffect, useState} from 'react'
// import axios from 'axios';


// function User() {
//   const [user, setUser] = useState([])

//   const getUser = async () =>{
//     //const data = await axios.get('api/getUser')
//     //const data = await axios.get('/classes')
//     //const data = await axios.get('/some')
//     //const data = await axios.get('http://localhost:8000/users')
//     const data = await axios.get('http://localhost:8000/users')
    
//     //setUser(data.data)
//     setUser(data.data)
//   }

//   useEffect(() => {
//     getUser()
//   }, [])


//   return (
//     <div className="App">

//         <p>
//           {/* {`All users: ${user}`}
          
//           {user.map(user =>{
//             return <>
//               <p>ID: {user.id}</p>
//               <p>Name: {user.name}</p>
//               <p>Age: {user.age}</p>
              
//             <hr></hr>
//           </>
//       })} */}

//         </p>
      
//     </div>
//   );
// }

// export default User;
