import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/actions';

const NavBar = () => {

    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState('')
    const dispatch=useDispatch();
    const login = e=>{
      e.preventDefault();
      const credentials={email,password}
      dispatch(loginThunk(credentials))
      .then(res=>{
          localStorage.setItem("token",res.data?.data.token)
          setLoginError('')
          setIsLoginVisible(false)
          })
      .catch(error=>{
          setLoginError(error.response.data.message)
      })
    }

    const logout=()=>{
        localStorage.setItem('token','');
        setIsLoginVisible(false);
    }
    return (
        <div className='navbar'>
            <h1>Mi tienda</h1>
            <button onClick={()=>setIsLoginVisible(!isLoginVisible)}>Login</button>

        <form onSubmit={login} className={`login ${isLoginVisible? 'open':''}`}>

            {localStorage.getItem("token")? 
                <button onClick={()=>logout()} type="button">LogOut</button>
                :

               ( <>
                    <input type="email" value={email}  onChange={e=>setEmail(e.target.value)} placeholder='email'/>
                    <input type="password" value={password}  onChange={e=>setPassword(e.target.value)} placeholder='password'/>
                    <button>Submit</button>
                    {loginError}
                </>)
             }
        </form>
        </div>
    );
};

export default NavBar;