import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Register = () => {
  return (
    <>
      <div className='login'>
          <form action="#">
            <h2 style={{textAlign:"center", color:"darkcyan"}}>Register</h2>
          <input type="text" placeholder='username' required />
          <input type="email" placeholder='email' required/>
          <input type="password" placeholder='password' required />
          <button>Login</button>

          <span style={{fontSize:"small",textAlign:"center"}}>Do you have an account? <Link to="/login">Log in</Link> </span>
        </form>
      </div>
    </>
  )
}

export default Register
