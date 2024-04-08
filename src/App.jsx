import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Hero from './Componentss/Hero'
import Aboutus from './Pages/Aboutus'
import Testimonials from './Pages/Testimonials'
import Campus from './Pages/Campus'
import Programs from './Pages/Programs'
import Contactus from './Pages/Contactus'



const route = createBrowserRouter([
  {
    path: "/",
    element : <Main />,
    children : [
      {
        path : "/",
        element : <Hero />
      },
      {
        path : "/Program",
        element : <Programs />
      },
      {
        path : "/Aboutus",
        element : <Aboutus />
      },
      {
        path : "/Testi",
        element : <Testimonials />
      },
      {
        path : "/Campus",
        element : <Campus />
      },
      {
        path : "/Contactus",
        element : <Contactus />
      }
      

    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={route}/>
  )
}

export default App