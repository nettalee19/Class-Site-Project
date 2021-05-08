import React, {useState} from 'react'

function EditLesson() {
    const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	//const [subjects, setSubjects] = useState('')

    const editLesson = () =>{

    }

    return (
        <div className="editLesson Lesson">
            <div className="form-container ">
					<form>
						<h2>Edit Class:</h2>
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
						<input type="button" value="Submit" onClick={editLesson}/>
					</form>
				</div>
      
      
    </div>
    )
}

export default EditLesson
