import "./HeroimgStyle.css";
// import IntroImage from "../assets/background image.webp"
import IntroImage from "../assets/ryland-dean-rMyel7micAg-unsplash (1).jpg";
import React from "react";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImage} alt="IntroImg" />
        </div>
        <div className="content">
          <p>HI, I'M A FREELANCER </p>
          <h1>Web Developer</h1>
          <div>
            <Link to="project" className="btn">
              PROJECTS
            </Link>
            <Link to="contact" className=" btn btn-light">
              CONTACT
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Heroimg;
