import React from 'react'
import Navbar from '../Components/Navbar'
import Fotter from '../Components/Fotter'
import Heroimg2 from '../Components/Heroimg2'
import PricingCard from '../Components/PricingCard'
// import WorkCard from '../Components/WorkCard'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
<Navbar/>
<Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
<Work/>



<PricingCard/>
<Fotter/>

    </div>
  )
}

export default Project