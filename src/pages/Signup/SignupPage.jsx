import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import UserAxios from '../../services/auth';
import { useNavigate } from "react-router-dom";
import "./SignUp.css"

function SignupPage() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  const userInstance = new UserAxios()


  const createNewUser = (eventHTML) => {
    eventHTML.preventDefault();
    console.log(newUser)
    userInstance.signUp(newUser).then(() => {
      navigate('/login')
    })
  }

  const updateNewUser = (eventHTML) => {
    const { name, value } = eventHTML.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (


    <div class="login-box">
      <h2>Sign Up</h2>
      <form onSubmit={createNewUser}>
        <div className="user-box">
          <input type="text" name="username" onChange={updateNewUser} required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="number" name="phoneNumber" onChange={updateNewUser} required="" />
          <label>Phone Number</label>
        </div>
        <div className="user-box">
          <input type="email" name="email" onChange={updateNewUser} required="" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" onChange={updateNewUser} required="" />
          <label>Password</label>
        </div>

        <button className='buttonStyle' type='submit'>Create

          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </form>
    </div>






















    // <Form onSubmit={createNewUser}>
    //   <Form.Group className='mb-3'>
    //     <Form.Label>Username</Form.Label>
    //     <Form.Control
    //       name='username'
    //       onChange={updateNewUser}
    //       type='text'
    //       placeholder=''
    //     />
    //     <Form.Label>Phone Number</Form.Label>
    //     <Form.Control
    //       name='phoneNumber'
    //       onChange={updateNewUser}
    //       type='number'
    //       placeholder=''
    //     />
    //   </Form.Group>
    //   <Form.Group className='mb-3'>
    //     <Form.Label>Email</Form.Label>
    //     <Form.Control
    //       type='text'
    //       placeholder=''
    //       onChange={updateNewUser}
    //       name='email'
    //     />
    //   </Form.Group>
    //   <Form.Group className='mb-3'>
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control
    //       type='password'
    //       name='password'
    //       onChange={updateNewUser}
    //     />
    //   </Form.Group>
    //   <Button variant='primary' type='submit'>
    //     Sign Up
    //   </Button>
    // </Form>
  )
}

export default SignupPage






