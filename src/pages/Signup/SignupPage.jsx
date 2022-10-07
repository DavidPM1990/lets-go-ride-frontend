import "./SignUp.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserAxios from '../../services/auth';


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

    <div className="login-box">
      <h2>Sign Up</h2>
      <form onSubmit={createNewUser}>
        <div className="user-box">
          <input type="text" name="username" onChange={updateNewUser} required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="number" name="phoneNumber" onChange={updateNewUser} required />
          <label>Phone Number</label>
        </div>
        <div className="user-box">
          <input type="email" name="email" onChange={updateNewUser} required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" onChange={updateNewUser} required />
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
  )
}

export default SignupPage;