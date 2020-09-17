import React from 'react'

import { rhythm } from '../utils/typography'
//import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './layout.scss'
import NavBar from '../components/navbar'

const LayoutPage = ({ title, children }) => {
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
      <main>{children}</main>
      <footer>
        © Copyright {new Date().getFullYear()} gg-box All rights reserved.
      </footer>
    </div>
  )
}

export default LayoutPage
