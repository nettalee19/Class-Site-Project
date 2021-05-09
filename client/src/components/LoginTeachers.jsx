import React, { useEffect, useState , useRef} from 'react'
import axios from 'axios';
//import { useHistory } from "react-router-dom";
//import { useHistory } from "react-dom";
//import history from "history"
import api from '../components/ApiSource/api'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom' //Route



function LoginTeachers() {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  //const history = useHistory()

  const [worngCredentials, setWorngCredentials] = useState("");
  

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
      //history.push('/')
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
      //history.push('/')
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
    <div>

  <Grid textAlign='center' style={{ height: '87vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        Teachers Login
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(e) => setEmail(e.target.value)}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button color='teal' fluid size='large' onClick={login}>
            
            <Link to="/" onClick={login}>Login</Link>
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to="/signUpTeach">Sign Up</Link>
        {/* New to us? <a href='#'>Sign Up</a> */}
      </Message>
    </Grid.Column>
  </Grid>
</div>
    // <div className="loginTeachers">
      
    //   {/* <form onSubmit={sumbitHandler}>
    //     <h2>Teachers Login:</h2>
    //     <label>Email:</label> 
    //     <input type="text" placeholder="enter email" onChange={e => setEmail(e.target.value)}/><br/>
        
    //     <label>Password:</label> 
    //     <input type="text" placeholder="enter password" onChange={p => setPassword(p.target.value)}/><br/>
    //     <input type="submit" onClick={login}/>

    //   </form> */}

    //   <div className="form-container sign-in-container">
		// 			<form>
		// 				<h1>Log in</h1>
		// 				<input
		// 					type="email"
		// 					placeholder="Email"
		// 					onChange={(e) => setEmail(e.target.value)}
		// 				/>
		// 				<input
		// 					type="password"
		// 					placeholder="Password"
		// 					onChange={(e) => setPassword(e.target.value)}
		// 				/>
		// 				{/* <button onClick={login}>Login</button> */}
    //         {/* <Button color='teal' fluid size='large' onClick={login}> */}
    //           <Link to="/" onClick={login}>Login</Link>
    //         {/* </Button> */}
		// 				<h4 className="wrong">{worngCredentials}</h4>
		// 			</form>
		// 		</div>


    //   <div className="form-container ">
		// 			<form>
		// 				<h1>Sign Up</h1>
    //         <input
		// 					type="number"
		// 					placeholder="Id"
		// 					onChange={(e) => setId(e.target.value)}
		// 				/>
    //         <input
		// 					type="name"
		// 					placeholder="Name"
		// 					onChange={(e) => setName(e.target.value)}
		// 				/>
    //         <input
		// 					type="number"
		// 					placeholder="Age"
		// 					onChange={(e) => setAge(e.target.value)}
		// 				/>
		// 				<input
		// 					type="email"
		// 					placeholder="Email"
		// 					onChange={(e) => setEmail(e.target.value)}
		// 				/>
		// 				<input
		// 					type="password"
		// 					placeholder="Password"
		// 					onChange={(e) => setPassword(e.target.value)}
		// 				/>
		// 				<button onClick={signUp}>Sign Un</button>
            
		// 				{/* <h4 className="wrong">{worngCredentials}</h4> */}
		// 			</form>
		// 		</div>

    //   {/* {user.map(user =>{
    //         return <>
    //           <p>ID: {user.id}</p>
    //           <p>Name: {user.name}</p>
    //           <p>Age: {user.age}</p>
              
    //         <hr></hr>
    //       </>
    //   })} */}
      
    // </div>
  );
}

export default LoginTeachers;

