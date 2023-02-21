import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { useSelector } from "react-redux";
const Header = (props) => {  
  const handleMouseMovement = (e) => {
    const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
    
      e.target.style.setProperty('--x', `${ x }px`)
      e.target.style.setProperty('--y', `${ y }px`)
  }
  const userData = useSelector((state) => state.auth.username);



  return (
    <header className="header-container">
      {userData && 
        <div className="nav">
          <Link to="/">
            <button className="button" onMouseMove={handleMouseMovement}>Home</button>
          </Link>
          <Link to="/posts">
            <button className="button" onMouseMove={handleMouseMovement}>Categories</button>
          </Link>
          
          <Link to="/likedposts">
            <button className="button" onMouseMove={handleMouseMovement}>Liked Posts</button>
          </Link>
          <Link to="/createpost" reloadDocument={true}>
            <button className="button" onMouseMove={handleMouseMovement}>Create Post</button>
          </Link>
        </div>
      }
      {!userData && 
        <div className="nav">
          <Link to="/">
            <button className="button" onMouseMove={handleMouseMovement}>Home</button>
          </Link>
          <Link to="/posts">
            <button className="button" onMouseMove={handleMouseMovement}>Categories</button>
          </Link>
        </div>
      }  
      
      <div className="title" onMouseMove={handleMouseMovement}>
        <h1>FORUM</h1>
      </div>
      {!userData && 
        <div className="authorization">
            <Link to="/signin">
              <button className="button" onMouseMove={handleMouseMovement}>Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="button" onMouseMove={handleMouseMovement}>Sign Up</button>
            </Link>
        </div>
      }
      {userData &&
        <div className="authorization">
          <Link to="/signin">
            <button className="button" onMouseMove={handleMouseMovement}>Profile</button>
          </Link>
          <Link to="/signout">
            <button className="button" onMouseMove={handleMouseMovement}>Log Out</button>
          </Link>
        </div>
      }
        
    </header>
  );
};
export default Header;