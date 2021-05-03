import React, {useEffect, useState} from 'react'
import axios from 'axios';


function User() {
  const [lesson, setLesson] = useState(null)

  const getLesson = async () =>{
    const data = await axios.get('http://localhost:8000/class')
    
    //setUser(data.data)
    setLesson(data.data)
  }

  useEffect(() => {
    getLesson()
  }, [])


  return (
    <div className="App">

        <p>
          {`Hello ${lesson}`}
          
          {/* {lesson.map(l =>{
            return <>
              
              <p>Name: {l.name}</p>
              <p>{l.description}</p>
              
              
            <hr></hr>
          </>
      })} */}

        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
    </div>
  );
}

export default User;
