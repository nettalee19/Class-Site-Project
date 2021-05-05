import React, { useEffect, useState , useRef} from 'react'
import axios from 'axios';


function LoginTeachers() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async() =>{
    try{
      const response = await axios.post('/teachers/loginTeachers',{
        email,
        password
      })
    }catch(error){
      console.log(error)
    }

    
  }
    const sumbitHandler= (e)=>{
      e.preventDefault()
    }
    
    const clickHandler = ()=>{
      login();
    }

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
        <input type="submit" onClick={clickHandler}/>

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

