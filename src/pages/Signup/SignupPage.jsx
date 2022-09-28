import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import UserAxios from '../../services/userAxios';


function SignupPage() {

  const [newUser, setNewUser] = useState({});
  const userInstance = new UserAxios


  const createNewUser = (eventHTML) => {
    eventHTML.preventDefault();
    console.log(newUser)
    userInstance.signUp(newUser).then((response) => {
      console.log(response)
    })
  }

  const updateNewUser = (eventHTML) => {
    const { name, value } = eventHTML.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <Form onSubmit={createNewUser}>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name='username'
          onChange={updateNewUser}
          type='text'
          placeholder=''
        />
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          name='phoneNumber'
          onChange={updateNewUser}
          type='number'
          placeholder=''
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='text'
          placeholder=''
          onChange={updateNewUser}
          name='email'
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          name='password'
          onChange={updateNewUser}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Sign Up
      </Button>
    </Form>
  )
}

export default SignupPage






