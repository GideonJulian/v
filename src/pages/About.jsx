import React from 'react'
import Navbar from '../components/ui/Navbar'
import AboutHero from '../components/ui/AboutHero'
import OurMission from '../components/Mission'

const About = () => {
  return (
    <div>
        <Navbar />
        <div>
            <AboutHero />
        </div>
        <div>
<OurMission />
        </div>
    </div>
  )
}

export default About