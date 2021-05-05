import React, {useEffect, useState} from 'react'
import axios from 'axios';


function User() {
  const [lesson, setLesson] = useState(null)

  const getLesson = async () =>{
    const data = await axios.get('http://localhost:8000/class')
    console.log(data)
    //setUser(data.data)
    setLesson(data.data)
  }

  useEffect(() => {
    getLesson()
  }, [])


  return (
    <div className="App">

        <div className="lessons">
          {/* {`Hello ${lesson}`} */}
          
        {lesson.map(l =>{
            return <>
             <div >
              <h4>{l.name}</h4>
              <p>{l.description}</p>
            </div> 
            <hr></hr>
          </>
        })}

        </div>

       
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
