import React from 'react'
// import { Link } from "gatsby"

//import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './layout.scss'
import NavBar from './navbar'
import Toc from './toc'
import Footer from './footer'
import { postContentStyle, postContentSideStyle } from '../styles/content-div'

const LayoutPost = ({ location, title, toc, children }) => {
  return (
    <div className="flexbox">
      <div className="main" style={postContentStyle}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
      <div className="side" style={postContentSideStyle}>
        <aside className="right-toc">
          <Toc toc={toc} />
        </aside>
      </div>
    </div>
  )
}

export default LayoutPost
