import "./LogIn.css"
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth.context'
import UserAxios from '../../services/auth'


function LogInPage() {
  const navigate = useNavigate();
  const [userlogin, setuserlogin] = useState({
    descrp: '',
    lastName: ''
  });

  const loginInstance = new UserAxios()
  const { storeToken, authentication, user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user)
    if (user) {
      navigate('/profile')
    }
  }, [user])




  const login = (eventHTML) => {
    eventHTML.preventDefault();
    loginInstance.logIn(userlogin).then((response) => {
      console.log('DATOS DEL LOGIN', response)
      storeToken(response.token);
      console.log('soy el tokeeeeeennnnn------->', response.token)
      authentication();

    }).catch(err => console.log(err))
  };

  const updateUser = (eventHTML) => {
    const { value, name } = eventHTML.target;
    setuserlogin({ ...userlogin, [name]: value });
  };

  return (

    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={login}>
        <div className="user-box">
          <input type="text" name="username" onChange={updateUser} required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" onChange={updateUser} required />
          <label>Password</label>
        </div>
        <button type='submit'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Log In
        </button>
      </form>
    </div>


  )
}

export default LogInPage