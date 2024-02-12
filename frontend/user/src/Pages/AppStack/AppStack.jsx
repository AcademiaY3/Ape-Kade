import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'

export default function AppStack() {
    return (
        <>
            <Header />
            {/* <Home/> */}
            {/* <About/> */}
            <Contact/>
            <Footer/>
      </>
  )
}
