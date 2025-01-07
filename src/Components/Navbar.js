import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hamburger,setHamburger]= useState("false");


  const handleClick = () => 
    setHamburger(!hamburger);

  const[color,setColor]= useState(false);
  const changecolor =() =>
  {
    if(window.scrollY>=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  window.addEventListener("scroll",changecolor);

  return (
    <div className={color ? "header header-bg": "header"}>
      <Link to="/"><h1>Portfolio</h1></Link>
      <ul className={hamburger ?"Nav-menu": "Nav-menu active"}>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/project"> Project</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>

        {hamburger ? (
            <FaBars size={20} style={{ color : "#fff"}}/>
        ):(
            
            <FaTimes size={20} style={{ color : "#fff"}}/>
        )
    }
      </div>
    </div>
  );
};

export default Navbar;
