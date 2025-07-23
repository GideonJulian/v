import React from 'react'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/ui/Hero'
import ScrollAnimation from '../components/ui/SCrollAnimation'
import Oursolution from '../components/Oursolution'

const Home = () => {
  return (
    <div className=''>
        <div className="w-ful">
            <Navbar />
        </div>
        <div>
          <Hero />
        </div>
      <div className='w-full p-4'> 
        <Oursolution />
      </div>
    </div>
  )
}

export default Home