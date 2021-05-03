import React, {useEffect, useState} from 'react'
import axios from 'axios';


function User() {
  const [user, setUser] = useState(null)

  const getUser = async () =>{
    //const data = await axios.get('api/getUser')
    const data = await axios.get('/classes')
    setUser(data.data)
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <div className="App">

        <p>
          {`Hello ${user}`}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default User;
