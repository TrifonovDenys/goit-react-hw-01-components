import React from "react"
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
  <nav className="navbar bg-dark mb-3 navbar">
    <div className="container-fluid">
        <div className="navbar-nav flex-row align-items-center">
          <NavLink className="navbar-brand text-white" to="/">Home</NavLink>
          <NavLink className="nav-link text-white me-3" aria-current="page" to="/friendlist">Friendlist</NavLink>
          <NavLink className="nav-link text-white me-3" to="/profile">Profile</NavLink>
          <NavLink className="nav-link text-white me-3"  to="/transitionhistory">Transitionhistory</NavLink>
          <NavLink className="nav-link text-white me-3" to="/statistic">Statistic</NavLink>
        </div>
    </div>
  </nav>
  )
}
export default Header