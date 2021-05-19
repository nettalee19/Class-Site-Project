import React, { useEffect, useState } from "react";
import api from "../ApiSource/api";
import FavLessons from "../Lessons/FavLessons"


function Student() {
  const [student, setStudent] = useState([]);
  const [token] = useState(localStorage.getItem("token"));
  
  // const [save, setSave] = useState("Edit");
  // const [isEdit, setIsEdit] = useState(false);
  // const [name,setName] = useState("")

  const getStudent = async () => {
    const data = await api.get("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setStudent(data.data);
    console.log(student);
  };

 

  const deleteStudent = async () => {
    const data = await api.delete("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.removeItem("token", data.token);
    console.log(data.token);

    setStudent(data.data);
    console.log(student);
  };



  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div className="TeacherMe">
     
      <div className="TeacherMeInfo">
        
        <p>{student.name}</p>
        <p>{student.age}</p>
        <p>{student.email}</p>
        {/* <p>{student.favorites}</p> */}
    

        <input type="button" value="Delete" onClick={deleteStudent} />

        <h2>My Favorite classes:</h2>
      </div>


      <div className="myLesson">

        
        
        {/* <MyLessons student={student} key={student._id} /> */}
        <div>
          {/* <Link to="/favorites">Favorites</Link> */}
          {/* <FavLessons/> */}
        </div>

      </div>
    </div>
  );
}

export default Student;



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
