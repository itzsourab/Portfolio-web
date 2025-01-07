import React from 'react'
import Navbar from '../Components/Navbar'
import Fotter from '../Components/Fotter'
import Heroimg2 from '../Components/Heroimg2'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="I'm a FUll stack web Developer"  />
      <AboutContent/>
      <Fotter/>
    </div>
  )
}

export default About