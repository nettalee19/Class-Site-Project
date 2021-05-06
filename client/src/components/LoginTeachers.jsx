import React, { useEffect, useState , useRef} from 'react'
import axios from 'axios';

import api from '../components/ApiSource/api'


function LoginTeachers() {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  

  const [worngCredentials, setWorngCredentials] = useState("");
  const signupBtn = useRef(null);


  // const login = async(e) =>{
  //   e.preventDefault()
  //   try{
  //     const data = await api.post('/teachers/login',{
  //       email,
  //       password
  //     })
  //     localStorage.setItem("token", data.teacher.token)
  //   }catch(error){
  //     console.log(error)
  //   }

    
  // }

  const login = async (e) => {
		e.preventDefault();
		try {
			const { data } = await api.post("/teachers/login", {
				email,
				password,
			});
			localStorage.setItem("token", data.token);
      console.log(data.token)
      console.log(data.teacher.name)
		} catch (e) {
			setWorngCredentials("User does not exist");
		}
	};

  const signUp = async (e) => {
		e.preventDefault();
		try {
			const { data } = await api.post("/teachers", {
				id,
        name,
        age,
        email,
				password,
			});
			localStorage.setItem("token", data.token);
      //console.log(data.token)
      //console.log(data.teacher.name)
      console.log(data)
		} catch (e) {
			console.log("error")
		}
	};

    // const sumbitHandler= (e)=>{
    //   e.preventDefault()
    // }
    
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
      
      {/* <form onSubmit={sumbitHandler}>
        <h2>Teachers Login:</h2>
        <label>Email:</label> 
        <input type="text" placeholder="enter email" onChange={e => setEmail(e.target.value)}/><br/>
        
        <label>Password:</label> 
        <input type="text" placeholder="enter password" onChange={p => setPassword(p.target.value)}/><br/>
        <input type="submit" onClick={login}/>

      </form> */}

      <div className="form-container sign-in-container">
					<form>
						<h1>Log in</h1>
						<input
							type="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button onClick={login}>Login</button>
						<h4 className="wrong">{worngCredentials}</h4>
					</form>
				</div>


      <div className="form-container ">
					<form>
						<h1>Sign Up</h1>
            <input
							type="number"
							placeholder="Id"
							onChange={(e) => setId(e.target.value)}
						/>
            <input
							type="name"
							placeholder="Name"
							onChange={(e) => setName(e.target.value)}
						/>
            <input
							type="number"
							placeholder="Age"
							onChange={(e) => setAge(e.target.value)}
						/>
						<input
							type="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button onClick={signUp}>Sign Un</button>
						{/* <h4 className="wrong">{worngCredentials}</h4> */}
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

