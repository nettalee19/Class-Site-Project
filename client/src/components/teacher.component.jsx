import React, {useEffect, useState} from 'react'
import axios from 'axios';


function Teacher() {
  const [teacher, setTeacher] = useState(null)

  const getTeacher = async () =>{
    //const data = await axios.get('api/getUser')
    //const data = await axios.get('/classes')
    //const data = await axios.get('/some')
    //const data = await axios.get('http://localhost:8000/users')
    const data = await axios.get('http://localhost:8000/teachers')
  
    setTeacher(data.data)
  }

  useEffect(() => {
    getTeacher()
  }, [])


  return (
    <div className="App">

        <p>
          {`All teachers: ${teacher}`}
          


        </p>
      
    </div>
  );
}

export default Teacher;
