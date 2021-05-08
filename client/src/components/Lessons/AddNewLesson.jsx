import React, {useState} from 'react'
//import React, {useEffect, useState} from 'react'
//import axios from 'axios';
import '../Lessons/lessons.css'
import api from '../ApiSource/api'

function AddNewLesson() {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	//const [subjects, setSubjects] = useState('')
	const [token] = useState(localStorage.getItem("token"));

	const addLesson = async (e) => {
		e.preventDefault();
		const token2= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyOGYzYTk3MjU5ODNhMWNlMzU5MTMiLCJpYXQiOjE2MjAzOTc0MDB9.QTsLTY2GgdQnUXwoI5dRRGNLE4kb9j4A_0_BefLNC7I"
		// try {
		// 	const { data } = await api.post("/class", 
		// 		{
		// 			name:"test",
		// 			description:"brooo"
		// 		},
		// 		headers: { Authorization: `Bearer ${token2}` },
		// 	);
			//localStorage.setItem("newLesson", data.newLesson);
      	// console.log(data.newLesson)
    //  console.log(data.teacher.name)
		// } catch (error) {
		// 	console.log(error.response)
		// }
		const config = {
			headers: { Authorization: `Bearer ${token}` }
		};
		
		const bodyParameters = {
		   name,
		   description,
		//    owner: 
		};
		
		await api.post( 
		  '/class',
		  bodyParameters,
		  config
		).then(console.log).catch(console.log());
		
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
						
						{/* <input
							type="subjects"
							placeholder="subjects"
							onChange={(e) => setSubjects(e.target.value)}
						/> */}


						{/* <button onClick={signUp}>Sign Un</button> */}
						<input type="button" value="Submit" onClick={addLesson}/>
					</form>
				</div>
      
      
    </div>
  );
}

export default AddNewLesson;
