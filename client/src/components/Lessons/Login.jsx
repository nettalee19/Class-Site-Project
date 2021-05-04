import React, { useEffect, useState} from 'react'



function LoginTeachers() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sumbitHandler = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={sumbitHandler}>
        <h2>Teachers Login:</h2>
        Email: <input type="text" placeholder="enter email" onChange={e => setEmail(e.target.value)}/><br/>
        {/* {console.log(email)} */}
        Password: <input type="text" placeholder="enter password" onChange={p => setPassword(p.target.value)}/><br/>
        <input type="submit"/>

      </form>
      
    </div>
  );
}

export default LoginTeachers;
