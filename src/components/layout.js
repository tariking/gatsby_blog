import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import './layout.scss'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Bio from '../components/bio'
import { contentStyle, postContentSideStyle} from '../styles/content-div'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h3
        style={{
          ...scale(1),
          marginBottom: rhythm(1.1),
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
    <div className="flexbox">
      <div className="main" style={contentStyle}>
        <NavBar />
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
      </div>
      <div className="side" style={postContentSideStyle}>
      {<Bio />}
      </div>
    </div>
  )
}

export default Layout
