import React from 'react'
import { Link } from 'gatsby'
import GGB from '../../content/assets/gg-box.png'
import GGBG from '../../content/assets/gg-box-gray.png'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__title">
        <Link to="/">
          <span className="navbar__img">
            <img src={GGB} alt="gg-box" className="ggbimg" />
          </span>
          <span className="navbar__titletext">gg-box Blog&nbsp;&nbsp;</span>
          <span className="navbar__img">
            <img src={GGBG} alt="gg-box" className="ggbimg" />
          </span>
        </Link>
      </div>

      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/tags">tags</Link>
        </li>
        <li className="navbar__li">
          <Link to="/about">about</Link>
        </li>
        <li className="navbar__li">
          <ThemeToggler>
            {({ theme, toggleTheme }) => {
              if (theme == null) {
                return null
              }
              return (
                <div
                  role="button"
                  tabIndex={0}
                  style={{ cursor: `pointer` }}
                  onClick={() =>
                    toggleTheme(theme === 'dark' ? 'light' : 'dark')
                  }
                  onKeyDown={() =>
                    toggleTheme(theme === 'dark' ? 'light' : 'dark')
                  }
                >
                  {theme === 'dark' ? '🌞' : '🌙'}
                </div>
              )
            }}
          </ThemeToggler>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
