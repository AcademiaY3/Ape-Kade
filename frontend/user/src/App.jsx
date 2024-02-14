import './App.css'
import React from 'react'
import AppStack from './Pages/AppStack/AppStack'
import SignIn from './Pages/AuthStack/SignIn/SignIn'
import SignUp from './Pages/AuthStack/SignUp/SignUp'
import ForgotPassword from './Pages/AuthStack/ForgotPassword/ForgotPassword'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/AppStack/Home/Home'
import Products from './Pages/AppStack/Products/Products'
import SingleProduct from './Pages/AppStack/SingleProduct/SingleProduct'
import Checkout from './Pages/AppStack/Checkout/Checkout'
import About from './Pages/AppStack/About/About'
import Contact from './Pages/AppStack/Contact/Contact'
import Sellers from './Pages/AppStack/Sellers/Sellers'
import SellerStore from './Pages/AppStack/SellerStore/SellerStore'
import Blog from './Pages/AppStack/Blogs/Blog'
import BlogDetail from './Pages/AppStack/BlogDetail/BlogDetail'
import Cart from './Pages/AppStack/Cart/Cart'
import WishList from './Pages/AppStack/WishList/WishList'
import Profile from './Pages/AppStack/Profile/Profile'
import ProfileAddress from './Pages/AppStack/Profile/ProfileAddress/ProfileAddress'
import ProfileSettings from './Pages/AppStack/Profile/ProfileSettings/ProfileSettings'
import ProfileOrder from './Pages/AppStack/Profile/ProfileOrder/ProfileOrder'
import ProfilePayment from './Pages/AppStack/Profile/ProfilePayment/ProfilePayment'
import Notification from './Pages/AppStack/Profile/Notification/Notification'
import SellerItems from './Pages/AppStack/SellerStore/SellerItems/SellerItems'
import SellerContact from './Pages/AppStack/SellerStore/SellerContact/SellerContact'
import Error404 from './Pages/Errors/404/Error404'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/app' element={<AppStack />} >
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='cart' element={<Cart />} />
            <Route path='whishlist' element={<WishList />} />
            <Route path='thanks' element={''} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='sellers' element={<Sellers />} />
            <Route path='sellerstore/:id' element={<SellerStore />} >
              <Route index element={<SellerItems />} />
              <Route path='sellerItems' element={<SellerItems />} />
              <Route path='sellerContact' element={<SellerContact />} />
            </Route>
            <Route path='blogs' element={<Blog />} />
            <Route path='blog/:id' element={<BlogDetail />} />
            <Route path='profile' element={<Profile />} >
              <Route index element={<ProfileSettings />} />
              <Route path='order' element={<ProfileOrder />} />
              <Route path='settings' element={<ProfileSettings />} />
              <Route path='address' element={<ProfileAddress />} />
              <Route path='payment' element={<ProfilePayment />} />
              <Route path='notification' element={<Notification />} />
            </Route>
          </Route>
          <Route path='*' element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
