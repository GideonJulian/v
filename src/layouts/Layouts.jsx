import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'

const Layouts = () => {
  return (
    <div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layouts