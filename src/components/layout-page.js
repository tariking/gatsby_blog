import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
//import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import "./layout.scss"
import NavBar from "../components/navbar"

const LayoutPage = ({ title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        marginTop: rhythm(1),
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <NavBar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default LayoutPage
