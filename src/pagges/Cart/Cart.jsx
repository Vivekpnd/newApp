import React, { useContext } from 'react'
import './cart.css'
import { food_list } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {

  const {cartItem , food_list , removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index) =>{
         if(cartItem[item._id]>0){
          return(
            <div>
               <div className='cart-items-title cart-items-item'>
              <img src={item.image} alt="item-image" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItem[item._id]}</p>
            <p>${item.price*cartItem[item._id]}</p>
            <p onClick={()=> removeFromCart(item._id)} className='cross'>x</p>
            </div>
            <hr />
            </div>
          )
         }
        })}
      </div>
      
      <div className="cart-bottom">
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
              <b>${2}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getTotalCartAmount()+2}</b>
            </div>
           
            <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-promocode">
            <div>
              <p>if you have promocode enter here</p>
              <div className="cart-promocode-input
              ">
               <input type="text" placeholder='promocode' />
               <button >submit</button> 
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart
