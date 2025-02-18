import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './pagges/Home/Home'
import Cart from './pagges/Cart/Cart'
import PlaceOrder from './pagges/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


function App() {

const [showLogin, setShowLogin]= useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      
    </div>
    <Footer />
    </>
  )
}

export default App
