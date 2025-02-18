import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla, placeat sapiente hic nisi, officiis ab porro sed</p>
            <div className="footer-social-media-icons">
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.twitter_icon} alt="twiter" />
                <img src={assets.linkedin_icon} alt="linkdin" />
            </div>
            </div>
            <div className="footer-content-right">
           <h2>Compony</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
            </div>
            <div className="footer-content-center">
             <h2>Get in touch</h2>
             <ul>
                <li>+875487489</li>
                <li>vivek.pnd4321@gmail.com</li>
             </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'> Copyright 2024 @ Vivek : All Right Reserved</p>
      
    </div>
  )
}

export default Footer
