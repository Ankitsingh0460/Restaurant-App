import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (<>
    <Header></Header>

    <div>{children}</div>

    <Footer></Footer>
  </>



  )
}

export default Layout
