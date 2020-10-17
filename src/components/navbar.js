import React from 'react'
import { Link } from 'gatsby'
import GGB from '../../content/assets/gg-box.png'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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

      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          // Don't render anything at compile time. Deferring rendering until we
          // know which theme to use on the client avoids incorrect initial
          // state being displayed.
          if (theme == null) {
            return null
          }
          return (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />
              🌙🌞
            </label>
          )
        }}
      </ThemeToggler>
    </nav>
  )
}

export default NavBar
