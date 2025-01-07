import "./FotterStyles.css"


 import React from 'react'
 import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
 
 const Fotter = () => {
   return (
     <div className="fotter">
        <div className="fotter-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                
                <p>Gangyal,Jammu</p>
                <p>Jammu & Kashmir</p></div>
           
            <div className="phone">
           <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            788-9626-405
            </h4>
            </div>
            <div className="email">
           <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            sv059813@gmail.com
            </h4>
            </div>
            </div>


            <div className="right">
                <h4>About Myself</h4>
                <p>I'm a web developer skilled in creating responsive, user-centered applications. I enjoy building efficient, scalable solutions using modern web technologies.</p>
                <div className="social"> 
                <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>

                </div>



            </div>

        </div>


     </div>
   )
 }
 
 export default Fotter