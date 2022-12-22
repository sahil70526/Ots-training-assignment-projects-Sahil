import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { products as pList } from '../product'
import { addCart } from '../redux/cart-reducer'

const Product = () => {
    const [products, setProducts] = useState(pList)
    const dispatch  = useDispatch()
  return (
    <div style={{display:'flex', flexWrap:'wrap', }}>
        {
            products.length>0 && products.map((product,index)=>(
                <div style={{height:'300px', width:'300px', border:'1px solid'}} key={product.id}>
                    <div>{product.id}</div>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <button onClick={()=>{dispatch(addCart(product))}}>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Product