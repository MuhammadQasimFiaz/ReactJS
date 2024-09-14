import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Courses from './components/Courses/Courses.jsx'
import Undergraduate from './components/Courses/Undergraduate.jsx'
import Graduate from './components/Courses/Graduateprogram.jsx'
import Phd from './components/Courses/Phd.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='courses' element={<Courses />}>
        <Route path='undergraduate' element={<Undergraduate />}/>
        <Route path='graduate' element={<Graduate />}/>
        <Route path='phd' element={<Phd />}/>
      </Route>
    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
