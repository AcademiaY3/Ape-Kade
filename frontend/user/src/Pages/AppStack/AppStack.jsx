import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import SingleProduct from './SingleProduct/SingleProduct'
import Products from './Products/Products'
import Cart from './Cart/Cart'
import WishList from './WishList/WishList'

export default function AppStack() {
    return (
        <>
            <Header />
            {/* <Home/> */}
            {/* <About/> */}
            {/* <Contact/> */}
            {/* <SingleProduct/> */}
            {/* <Products/> */}
            {/* <Cart/> */}
            <WishList/>
            <Footer/>
      </>
  )
}
