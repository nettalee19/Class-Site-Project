// import React, { useEffect, useState , useRef} from 'react'
// import axios from 'axios';
// //import { useHistory } from "react-router-dom";
// //import { useHistory } from "react-dom";
// //import history from "history"
// import api from '../components/ApiSource/api'

 

// function LoginTeachers() {
//   const [name, setName] = useState('')
//   const [id, setId] = useState('')
//   const [age, setAge] = useState('')
//   const [password, setPassword] = useState('')
//   const [email, setEmail] = useState('')
//   //const history = useHistory()

//   const [worngCredentials, setWorngCredentials] = useState("");
  

//   const login = async (e) => {
// 		e.preventDefault();
    
// 		try {
// 			const { data } = await api.post("/teachers/login", {
// 				email,
// 				password,
// 			});
// 			localStorage.setItem("token", data.token);
//       console.log(data.token)
//       console.log(data.teacher.name)
//       //history.push('/')
// 		} catch (e) {
// 			setWorngCredentials("User does not exist");
// 		}
// 	};

//   const signUp = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const { data } = await api.post("/teachers", {
// 				id,
//         name,
//         age,
//         email,
// 				password,
// 			});
// 			localStorage.setItem("token", data.token);
//       //console.log(data.token)
//       //console.log(data.teacher.name)
//       console.log(data)
//       //history.push('/')
// 		} catch (e) {
// 			console.log("error")
// 		}
// 	};



//   return (
//     <div className="loginTeachers">
      

//       <div className="form-container sign-in-container">
// 					<form>
// 						<h1>Students Login</h1>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							onChange={(e) => setEmail(e.target.value)}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							onChange={(e) => setPassword(e.target.value)}
// 						/>
// 						<button onClick={login}>Login</button>
// 						<h4 className="wrong">{worngCredentials}</h4>
// 					</form>
// 				</div>


//       <div className="form-container ">
// 					<form>
// 						<h1>Sign Up</h1>
//             <input
// 							type="number"
// 							placeholder="Id"
// 							onChange={(e) => setId(e.target.value)}
// 						/>
//             <input
// 							type="name"
// 							placeholder="Name"
// 							onChange={(e) => setName(e.target.value)}
// 						/>
//             <input
// 							type="number"
// 							placeholder="Age"
// 							onChange={(e) => setAge(e.target.value)}
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							onChange={(e) => setEmail(e.target.value)}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							onChange={(e) => setPassword(e.target.value)}
// 						/>
// 						<button onClick={signUp}>Sign Un</button>
// 						{/* <h4 className="wrong">{worngCredentials}</h4> */}
// 					</form>
// 				</div>

      
//     </div>
//   );
// }

// export default LoginTeachers;



import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import api from '../components/ApiSource/api'
import { Link} from 'react-router-dom' //Route



const LoginForm = () => {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [worngCredentials, setWorngCredentials] = useState("");

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

return(
<div>

  <Grid textAlign='center' style={{ height: '87vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
         Teachers Signup
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input
            fluid
            icon='id badge'
            iconPosition='left'
            placeholder='Id'
            type='number'
            onChange={(e) => setId(e.target.value)}
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Name'
            type='name'
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            fluid
            icon='birthday cake'
            iconPosition='left'
            placeholder='Age'
            type='number'
            onChange={(e) => setAge(e.target.value)}
          />
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' onChange={(e) => setEmail(e.target.value)}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button color='teal' fluid size='large' onClick={signUp}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Already a member? <Link to="/loginStudents">Log in</Link>
        {/* New to us? <a href='#'>Sign Up</a> */}
      </Message>
    </Grid.Column>
  </Grid>
</div>
)
}



export default LoginForm