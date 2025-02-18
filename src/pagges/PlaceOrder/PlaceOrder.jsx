import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {
 const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>

      <div className="place-order-left">
      <p className="title">Delivery Information</p>
        <div className="multy-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="Email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multy-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multy-fields">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Sub total</p>
              <b>${getTotalCartAmount()}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <b>${getTotalCartAmount() === 0?0:2}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getTotalCartAmount() === 0?0:getTotalCartAmount()+2}</b>
            </div>
           
            <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div></div>

      </div>

    </form>
  )
}

export default PlaceOrder
