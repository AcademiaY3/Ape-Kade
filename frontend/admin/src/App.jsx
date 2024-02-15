import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppStack from './Pages/AppStack/AppStack'
import ForgotPassword from './Pages/AuthStack/ForgotPassword/ForgotPassword'
import SignIn from './Pages/AuthStack/SignIn/SignIn'
import Dashboard from './Pages/AppStack/Dashboard/Dashboard'
import Products from './Pages/AppStack/Products/Products'
import Categories from './Pages/AppStack/Categories/Categories'
import Orders from './Pages/AppStack/Orders/Orders'
import Sellers from './Pages/AppStack/Sellers/Sellers'
import Customers from './Pages/AppStack/Customers/Customers'
import Reviews from './Pages/AppStack/Reviews/Reviews'
import Profile from './Pages/AppStack/Profile/Profile'
import AppNotifications from './Pages/AppStack/AppNotifications/AppNotifications'
import AddCustomers from './Pages/AppStack/AddCustomers/AddCustomers'
import AddSeller from './Pages/AppStack/AddSeller/AddSeller'
import AddProducts from './Pages/AppStack/AddProducts/AddProducts'
import AddCategory from './Pages/AppStack/AddCategory/AddCategory'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/signIn' element={<SignIn/>} />
          <Route path='/forgot' element={<ForgotPassword/>} />
          <Route path='/app' element={<AppStack />} >
            <Route index element={<Dashboard/>} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='products' element={<Products/>} />
            <Route path='addProduct' element={<AddProducts/>} />
            <Route path='editProduct/:id' element={<AddProducts/>} />
            <Route path='categories' element={<Categories/>} />
            <Route path='addCategory' element={<AddCategory/>} />
            <Route path='editCategory/:id' element={<AddCategory/>} />
            <Route path='orders' element={<Orders/>} />
            <Route path='sellers' element={<Sellers/>} />
            <Route path='addSeller' element={<AddSeller/>} />
            <Route path='editSeller/:id' element={<AddSeller/>} />
            <Route path='customers' element={<Customers/>} />
            <Route path='addCustomer' element={<AddCustomers/>} />
            <Route path='editCustomer/:id' element={<AddCustomers/>} />
            <Route path='reviews' element={<Reviews/>} />
            <Route path='profile' element={<Profile/>} />
            <Route path='notifications' element={<AppNotifications/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
