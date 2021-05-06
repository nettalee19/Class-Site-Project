import React, { useEffect, useState , useRef} from 'react'
import axios from 'axios';

import api from '../components/ApiSource/api'


function LoginTeachers() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [worngCredentials, setWorngCredentials] = useState("");

  const login = async(e) =>{
    e.preventDefault()
    try{
      const data = await api.post('/teachers/login',{
        email,
        password
      })
      localStorage.setItem("token", data.teacher.token)
    }catch(error){
      console.log(error)
    }

    
  }
    const sumbitHandler= (e)=>{
      e.preventDefault()
    }
    
    // const clickHandler = ()=>{
    //   login();
    // }

  // const [user, setUser] = useState(null)

  // const sumbitHandler = (e) =>{
  //   e.preventDefault()
  //   try{

  //   }catch(error){
  //     console.log("wrong")
  //   }
  // }

  // const getUser = async () =>{
  //   const data = await axios.get('http://localhost:8000/users')
  //   setUser(data.data)
  // }

  // useEffect(() => {
  //   getUser()
  // }, [])


  return (
    <div className="loginTeachers">
      <form onSubmit={sumbitHandler}>
        <h2>Teachers Login:</h2>
        <label>Email:</label> 
        <input type="text" placeholder="enter email" onChange={e => setEmail(e.target.value)}/><br/>
        {/* {console.log(email)} */}
        <label>Password:</label> 
        <input type="text" placeholder="enter password" onChange={p => setPassword(p.target.value)}/><br/>
        <input type="submit" onClick={login}/>

      </form>

      <div className="form-container sign-in-container">
					<form>
						<h1>Sign in</h1>
						<input
							type="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.currentTarget.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>
						<button onClick={login}>Sign In</button>
						<h4 className="wrong">{worngCredentials}</h4>
					</form>
				</div>

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

