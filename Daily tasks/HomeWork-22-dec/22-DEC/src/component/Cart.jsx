import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cart-reducer'

const Cart = () => {
    const {cartItem } = useSelector((state)=>state.cart.data)
    const dispatch = useDispatch()
    console.log(cartItem);
  return (
    <div>
        <h1>Cart</h1>
        <div style={{display:'flex', flexWrap:'wrap', }}>
            
                {/* <div style={{height:'300px', width:'300px', border:'1px solid'}} key={cartItem.id}>
                    <div>{cartItem.id}</div>
                    <div>{cartItem.name}</div>
                    <div>{cartItem.price}</div>
                    <button onClick={()=>{dispatch(removeFromCart(cartItem.id))}} >Remove from Cart</button>
                </div> */}
            
        </div>
    </div>
  )
}

export default Cart