import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cart-reducer'

const Cart = () => {
    const {cartItem } = useSelector((state)=>state.cart.data)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Cart</h1>
        <div style={{display:'flex', flexWrap:'wrap', }}>
            {cartItem.length>0 ? (
                cartItem.map((product, index)=>(
                <div style={{height:'300px', width:'300px', border:'1px solid'}} key={product.id}>
                    <div>{product.id}</div>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <button onClick={()=>{dispatch(removeFromCart(index))}} >Remove from Cart</button>
                </div>)
            )):<div>No data Found</div>}
        </div>
    </div>
  )
}

export default Cart