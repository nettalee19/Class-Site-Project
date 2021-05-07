import React, {useState} from 'react'
//import React, {useEffect, useState} from 'react'
//import axios from 'axios';
import '../Lessons/lessons.css'
import api from '../ApiSource/api'

function AddNewLesson() {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [subjects, setSubjects] = useState('')

	const addLesson = async (e) => {
		e.preventDefault();
		try {
			const { data } = await api.post("/class", {
				name,
				description,
				subjects
			});
			//localStorage.setItem("token", data.newLesson);
      	console.log(data.newLesson)
    //  console.log(data.teacher.name)
		} catch (error) {
			console.log(error)
		}
	};


  return (
    <div className="addNewLesson Lesson">
      <div className="form-container ">
					<form>
						<h2>Add a new Class:</h2>
						<input
							type="name"
							placeholder="Name"
							onChange={(e) => setName(e.target.value)}
						/>

						<textarea 
						id="description" 
						placeholder="description"
						name="description" 
						rows="4" 
						cols="50"
						onChange={(e) => setDescription(e.target.value)}/>
						
						<input
							type="subjects"
							placeholder="subjects"
							onChange={(e) => setSubjects(e.target.value)}
						/>


						{/* <button onClick={signUp}>Sign Un</button> */}
						<input type="button" value="Submit" onClick={addLesson}/>
					</form>
				</div>
      
      
    </div>
  );
}

export default AddNewLesson;
