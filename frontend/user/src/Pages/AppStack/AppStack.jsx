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
import Checkout from './Checkout/Checkout'
import Error404 from '../Errors/404/Error404'
import SellerStore from './SellerStore/SellerStore'
import Sellers from './Sellers/Sellers'
import Profile from './Profile/Profile'
import Blog from './Blogs/Blog'
import BlogDetail from './BlogDetail/BlogDetail'

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
            {/* <WishList/> */}
            {/* <Checkout/> */}
            {/* <Error404/> */}
            <SellerStore/>
            {/* <Sellers/> */}
            {/* <Profile/> */}
            {/* <Blog/> */}
            {/* <BlogDetail/> */}
            <Footer/>
      </>
  )
}
