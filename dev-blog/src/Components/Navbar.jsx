import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo"> <img src="/blog.png" alt="blog image"/> </div>
          <div className="links">
             <Link className='links' to="/?cat=art">
                <h5>Art</h5> 
             </Link>
             <Link className='links' to="/?cat=science">
                <h5>Science</h5> 
             </Link>
              <Link className='links' to="/?cat=technology">
                <h5>Technology</h5> 
             </Link>
              <Link className='links' to="/?cat=food">
                <h5>Food</h5> 
             </Link>
              <Link className='links' to="/?cat=cinema">
                <h5>Cinema</h5> 
             </Link>

             {/* user logout and write*/ }
              <span>John</span>
              <span className='logout'>Logout</span>
              <span className='write'>
                <Link className='links' to="/write">Write</Link>
              </span>

             </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
