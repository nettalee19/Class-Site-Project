import React, {useEffect, useState} from 'react'
import axios from 'axios';


function User() {
  const [user, setUser] = useState(null)

  const getUser = async () =>{
    //const data = await axios.get('api/getUser')
    //const data = await axios.get('/classes')
    //const data = await axios.get('/some')
    //const data = await axios.get('http://localhost:8000/users')
    const data = await axios.get('http://localhost:8000/users')
    
    //setUser(data.data)
    setUser(data.data)
  }

  useEffect(() => {
    getUser()
  }, [])


  return (
    <div className="App">

        <p>
          {`Hello ${user}`}
          
          {/* {user.map(user =>{
            return <>
              <p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              
            <hr></hr>
          </>
      })} */}

        </p>
      
    </div>
  );
}

export default User;
