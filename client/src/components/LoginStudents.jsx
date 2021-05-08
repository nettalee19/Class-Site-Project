import React, { useEffect, useState} from 'react'


function Header() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">

        <h2>Teachers Login:</h2>
        Email: <input type="text" placeholder="enter email"/><br/>
        Password: <input type="text" placeholder="enter password"/><br/>
        <input type="submit"/>
      
    </div>
  );
}

export default Header;


