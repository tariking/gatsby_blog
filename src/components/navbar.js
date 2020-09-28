import React from 'react'
import { Link } from 'gatsby'
import GGB from '../../content/assets/gg-box.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__title">
        <Link to="/">
          <span className="navbar__img">
            <img src={GGB} alt="gg-box" className="ggbimg" />
          </span>
          <span className="navbar__titletext">gg-box Blog</span>
        </Link>
      </div>

      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/tags">tags</Link>
        </li>
        <li className="navbar__li">
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
