import React, { useState } from 'react'
import './LoginPopup.css'
import {assets} from '../../assets/frontend_assets/assets'

function LoginPopup({setShowLogin}) {

   const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
     <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cross icon" />
     </div>
     <div className="login-popup-input">
        {currState === "Login"?<></>:<input type="text" placeholder='You name' required/>}
        <input type="e-mail" placeholder='Your email' required />
        <input type="password" placeholder='password' required />
     </div>
     <button>{currState === "Signup"? "CreateAccount":"Login"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By continuing , i agree to the term of use & privacy policy</p>
      </div>
        {currState === "Login"? <p>Create a new account? <span onClick={()=> setCurrState("Signup")}>Click here</span></p>:<p>Already have a account <span onClick={()=> setCurrState("Login")}>Click here</span></p>}
      </form>
      
    </div>
  )
}

export default LoginPopup
