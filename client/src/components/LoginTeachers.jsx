import React, { useEffect, useState} from 'react'
import axios from 'axios';


function LoginTeachers() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const sumbitHandler = (e) =>{
    e.preventDefault()
  }

  const getUser = async () =>{
    const data = await axios.get('http://localhost:8000/users')
    setUser(data.data)
  }

  useEffect(() => {
    getUser()
  }, [])


  return (
    <div className="loginTeachers">
      <form onSubmit={sumbitHandler}>
        <h2>Teachers Login:</h2>
        Email: <input type="text" placeholder="enter email" onChange={e => setEmail(e.target.value)}/><br/>
        {/* {console.log(email)} */}
        Password: <input type="text" placeholder="enter password" onChange={p => setPassword(p.target.value)}/><br/>
        <input type="submit"/>

      </form>

      {/* {user.map(user =>{
            return <>
              <p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              
            <hr></hr>
          </>
      })} */}
      
    </div>
  );
}

export default LoginTeachers;

