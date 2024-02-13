import './App.css'
import React from 'react'
import AppStack from './Pages/AppStack/AppStack'
import SignIn from './Pages/AuthStack/SignIn/SignIn'
import SignUp from './Pages/AuthStack/SignUp/SignUp'
import ForgotPassword from './Pages/AuthStack/ForgotPassword/ForgotPassword'

function App() {

  return (
    <>
      {/* <AppStack/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <ForgotPassword/>
    </>
  )
}

export default App
