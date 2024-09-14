import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <ul className='flex gap-5 text-white p-10 justify-center bg-gray-500 font-mono border-b-2'>
        <li><NavLink to='/' className={ ({ isActive }) => `${isActive ? "underline font-semibold" : ""}` }>Home</NavLink></li>
        <li><NavLink to='about' className={ ({ isActive }) => `${isActive ? "underline font-semibold" : ""}` }>About</NavLink></li>
        <li><NavLink to='contact' className={ ({ isActive }) => `${isActive ? "underline font-semibold" : ""}` }>Contact</NavLink></li>
        <li><NavLink to='courses' className={ ({ isActive }) => `${isActive ? "underline font-semibold" : ""}` }>Courses</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header
