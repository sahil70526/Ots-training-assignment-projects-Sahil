import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cart-reducer";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  console.log(cartItem);
  return (
    <div>
      <h1>Cart</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.keys(cartItem).length > 0 &&
          Object.keys(cartItem).map((item,index)=>(
            <div
              style={{ height: "300px", width: "300px", border: "1px solid" }}
              key={index}
            >
              <div>Id :-{cartItem[item].id}</div>
              <div>Name :-{cartItem[item].name}</div>
              <div>Price :-{cartItem[item].price}</div>
              <div>Count :-{cartItem[item].count}</div>
              <button
                onClick={() => {
                  dispatch(removeFromCart(cartItem[item].id));
                }}
              >
                Remove from Cart
              </button>
            </div>
          ))}
      </div>
      ;
    </div>
  );
};

export default Cart;
