import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/fav">Favourites</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
