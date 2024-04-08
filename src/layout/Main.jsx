import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Componentss/Navbar'

const Main = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Main