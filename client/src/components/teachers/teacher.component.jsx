import React, { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
//import axios from 'axios';
import api from "../ApiSource/api";
// import LogoutBtn from "../header/LogoutBtn";
// import Lessons from "../Lessons/lesson.component";
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


  // const [photoSelected, setPhotoSelected] = useState()
  // const [photoPicked, setPhotoPicked] = useState()

  // const changeHandler = (event) => {
	// 	setPhotoSelected(event.target.files[0]);
	// 	setIsSelected(true);
	// };

  // const handleSubmission = () => {
	// 	const formData = new FormData();

	// 	formData.append('avatar', photoSelected);

	// 	fetch(
	// 		'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
	// 		{
	// 			method: 'POST',
	// 			body: formData,
	// 		}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => {
	// 			console.log('Success:', result);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 		});
	// };
	// };

	

  
  // const photoUpload = async (e) =>{
  //   console.log(e.target.files[0])
  //   setPhoto(e.target.files[0])
  // }
  
  // const upload = async() =>{
  //   await api.post('/upload', {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
    
  // }


 



  const [photo, setPhoto] = useState()
  const selectPhoto = (e) =>{
    console.log(e.target.files[0])
    setPhoto(e.target.files[0])
  }

  const submitPhoto = async() =>{
    const formData = new FormData();

    formData.append(
      "myFile",
      photo
    );

    await api.post('/teachers/me/avatar', formData)

    // await api.post('/me/avatar', {
    //   headers: { Authorization: `Bearer ${token}` },
    // })
  }







  
  const deletePhoto = async() =>{
    console.log("this is delete")
    const data = await api.delete("/teachers/me/avatar", {
      headers: { Authorization: `Bearer ${token}` },
    });

    //setPhoto(null);
    //console.log(photo);
    
  }
  // useEffect(() => {
    
  // }, []);





  // const getTeacher = async () => {
  //   const data = await api.get("/teachers/me", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });

  //   setTeacher(data.data);
  //   console.log(teacher);
  // };

  return (
    <div className="TeacherMe">
      <div className="TeacherMeInfo">
        
        {teacher.avatar? <img src={`data:image/jpg;base64,${teacher.avatar}`}/> : null }
        {teacher.avatar? <input type="button" onClick={deletePhoto} value="Delete Photo"/> : null }
        
        <p>{teacher.name}</p>
        <p>{teacher.age}</p>
        <p>{teacher.email}</p>
        <p>{teacher.subjects}</p>
        
        {/* &nbsp */}
        
        
        
          <input type="file" name="file" onChange={selectPhoto}></input>
          <input type="button" onClick={submitPhoto} value="Upload"></input><br/>

        <input type="button" value="Delete User" onClick={deleteTeacher} /><br/>
        

      </div>
      <div className="myLesson">

        {/* <input 
        type="button" 
        value="Log out"
      onClick={logoutTeacher}/> */}

        {/* <LogoutBtn/> */}
        <h2>My classes:</h2>
        {/* <Lessons/> */}
        <MyLessons teacher={teacher} key={teacher._id} />

      </div>
    </div>
  );
}

export default Teacher;



// const [selectedFile, setSelectedFile] = useState();
// //const [isFilePicked, setIsFilePicked] = useState(false);

// const changeHandler = (event) => {
//   setSelectedFile(event.target.files[0]);
//   //setIsFilePicked(true);
// };

// const handleSubmission = () => {
//   const formData = new FormData();

//   formData.append('avatar', selectedFile);

//   fetch(
//     'http://localhost:8000/teachers/me/avatar',
//     {
//       method: 'POST',
//       body: formData,
//     }
//   )
//     .then((response) => response.json())
//     .then((result) => {
//       console.log('Success:', result);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// };