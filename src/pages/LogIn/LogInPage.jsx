import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import UserAxios from '../../services/auth'
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../context/auth.context'


function LogInPage() {
  console.log(localStorage.getItem('tokenAuth'))
  const navigate = useNavigate();
  const [user, setuser] = useState({
    descrp: '',
    lastName: ''
  });
  const loginInstance = new UserAxios
  const { storeToken, authentication } = useContext(AuthContext);


  const login = (eventHTML) => {
    eventHTML.preventDefault();
    loginInstance.logIn(user).then((response) => {
      console.log('DATOS DEL LOGIN', response)
      storeToken(response.token);
      console.log('soy el tokeeeeeennnnn------->', response.token)
      authentication();
      // console.log("ehhh pq no chusca")
      navigate('/profile')
    }).catch(err => console.log(err))
  };

  const updateUser = (eventHTML) => {
    const { value, name } = eventHTML.target;
    setuser({ ...user, [name]: value });
  };

  return (
    <Form onSubmit={login}>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder=''
          onChange={updateUser}
          name='username'
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' name='password' onChange={updateUser} />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Log in
      </Button>
    </Form>

  )
}

export default LogInPage