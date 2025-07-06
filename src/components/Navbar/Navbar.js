import "./NavbarStyles.css";
import profilepic from "../../assets/profile-pic.jpeg";

import React, { useState , useEffect , useRef } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const headerRef = useRef(null);

 const changeColor = () => {
      (window.scrollY >= 100) ?  headerRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.85)' :  headerRef.current.style.backgroundColor = 'transparent';
 };

 useEffect(() => {
      window.addEventListener('scroll', changeColor);
      return () => window.removeEventListener('scroll', changeColor);
 }, []);

  return (
    <div className='header' ref={headerRef}>
      <div className="header-title-container">
        <img className="profile-pic" src={profilepic} alt="profile-pic"></img>
        <Link to="/">
          <h1 className="header-title">Natan Barel - Portfolio</h1>
        </Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleClick}>Home</Link>
        </li>
        <li>
          <Link to="/project" onClick={handleClick}>Projects</Link>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        {/* <li>
          <Link to="/articles" onClick={handleClick}>Articles</Link>
        </li> */}
        <li>
          <Link to="/resume" onClick={handleClick}>Resume</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
