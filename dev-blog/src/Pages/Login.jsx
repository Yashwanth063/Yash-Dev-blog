import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <>
      <div className='login'>
          <form action="/" method='get'>
            <h2 style={{textAlign:"center", color:"darkcyan"}}>Login</h2>
          <input type="text" placeholder='username'required />
          <input type="password" placeholder='password' required />
          <button>Login</button>

          <span style={{fontSize:"small",textAlign:"center"}}>Don't have an account? <Link to="/register">Sign up</Link> </span>
        </form>
      </div>
    </>
  )
}

export default Login
