import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <NavLink to='/'>
          <img src="" alt="" />
        </NavLink>
        <div>
        <NavLink>
          <p>Home</p>
        </NavLink>
          <NavLink>
          <div>
          <FaCartShopping />
          </div>
          </NavLink>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
