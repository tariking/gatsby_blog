import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import './layout.scss'
import NavBar from '../components/navbar'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h3
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: rhythm(0.5),
          paddingTop: rhythm(1),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        marginTop: '50px',
        maxWidth: rhythm(24),
        paddingLeft: `${rhythm(3 / 4)}`,
        paddingRight: `${rhythm(3 / 4)}`,
        paddingTop: '0',
        paddingBottom: `${rhythm(1.5)}`,
        backgroundColor: '#fff',
      }}
    >
      <NavBar />
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © Copyright {new Date().getFullYear()} gg-box All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
