import React from 'react'

//import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './layout.scss'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { contentStyle } from '../styles/content-div'

const LayoutPage = ({ title, children }) => {
  return (
    <div style={contentStyle}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutPage
