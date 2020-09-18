import React from 'react'
// import { Link } from "gatsby"

import { rhythm, scale } from '../utils/typography'
//import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './layout.scss'
import NavBar from './navbar'
import Toc from './toc'

const LayoutPost = ({ location, title, toc, children }) => {
  return (
    <div class="flexbox">
      <div
        class="main"
        style={{
          marginLeft: `auto`,
          //marginRight: `auto`,
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
        <main>{children}</main>
        <footer>
          © Copyright {new Date().getFullYear()} gg-box All rights reserved.
        </footer>
      </div>
      <div
        class="side"
        style={{
          marginRight: `auto`,
          marginTop: '50px',
        }}
      >
        <aside class="right-toc">
          <Toc toc={toc} />
        </aside>
      </div>
    </div>
  )
}

export default LayoutPost
