import React from 'react'
// import { Link } from "gatsby"

import { rhythm, scale } from '../utils/typography'
//import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './layout.scss'
import NavBar from './navbar'

const LayoutPost = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <NavBar />
      {/* <header>{header}</header> */}
      <main>{children}</main>
      <footer>
        © Copyright {new Date().getFullYear()} gg-box All rights reserved.
      </footer>
    </div>
  )
}

export default LayoutPost
