import React from 'react'

//import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './layout.scss'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Bio from '../components/bio'
import { postContentStyle, postContentSideStyle } from '../styles/content-div'

const LayoutPage = ({ title, children }) => {
  return (
    <div className="flexbox">
      <div className="main" style={postContentStyle}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
      <div className="side" style={postContentSideStyle}>
        {<Bio />}
      </div>
    </div>
  )
}

export default LayoutPage
