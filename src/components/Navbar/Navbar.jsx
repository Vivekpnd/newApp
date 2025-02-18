import React, { useContext, useState } from 'react'
import {assets}  from '../../assets/frontend_assets/assets'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

function Navbar({setShowLogin}) {

  const [menu, setMenu] = useState("home")
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="logo" /></Link> 
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>mobile app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
           <Link to="/cart"><img src={assets.basket_icon} alt="basket-icon" /></Link> 
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=> setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
