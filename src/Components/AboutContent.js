import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import image from "../assets/react.jpg"
import image2 from "../assets/react2 (2).jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">

             <h1>Who Am I?</h1>
             <p>I'm react front-end developer. I create responsive secure websites for my clients</p>
          <Link to="/contact">
          <button className="btn">Contact</button>
          </Link>
        </div>


        
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={image2} className="img" alt="content-image"/>

            </div>
            <div className="img-stack bottom">
                <img src={image} className="img" alt="content-image"/>
                
            </div>

        </div>

    </div>

    </div>
  )
}

export default AboutContent