import React from 'react'
import Header from '../../Components/Header/Header'
import MainSideNav from '../../Components/SideBar/MainSideNav'
import Dashboard from './Dashboard/Dashboard'
import Products from './Products/Products'
import Categories from './Categories/Categories'
import Orders from './Orders/Orders'
import Sellers from './Sellers/Sellers'
import Customers from './Customers/Customers'
import Reviews from './Reviews/Reviews'
import AddProducts from './AddProducts/AddProducts'
import AddCategory from './AddCategory/AddCategory'
import AddCustomers from './AddCustomers/AddCustomers'
import AddSeller from './AddSeller/AddSeller'

export default function AppStack() {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <MainSideNav />
        {/* outlet */}
        {/* <Dashboard/> */}
        {/* <Products/> */}
        {/* <Categories/> */}
        {/* <Orders/> */}
        <Sellers/>
        {/* <Customers/> */}
        {/* <Reviews/> */}
        {/* <AddProducts/> */}
        {/* <AddCategory/> */}
        {/* <AddCustomers/> */}
        {/* <AddSeller/> */}
      </div>
    </>
  )
}
