import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseCartItemCount, decreaseCartItemCount, removeAll } from "../redux/cart-reducer";
import { Button, Card, Icon } from 'semantic-ui-react';

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart.data);
  const [removeAllItem, setRemoveAllItem] = useState(true)
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: '5px' }}>
      <span ><span style={{ marginRight: '15px', fontSize: '220%' }}>Cart</span><Button onClick={() => {
        removeAllItem && dispatch(removeAll(removeAllItem));
        setRemoveAllItem(false)

      }}
        primary style={{ height: '40px' }}>Remove All</Button>
      </span>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.keys(cartItem).length > 0 &&
          Object.keys(cartItem).map((item, index) => (
            <Card style={{ margin: '15px' }} key={index}>
              <Card.Content>
                <Card.Header>Product-Name :- {cartItem[item].name} </Card.Header>
              </Card.Content>
              <Card.Content>
                <Card.Description>Id :-{cartItem[item].id}</Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description>Price :-{cartItem[item].price}</Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description><Button
                  onClick={() => { dispatch(increaseCartItemCount(cartItem[item])); }} >
                  <Icon name='add' /></Button>
                  Count :- {cartItem[item].count}
                  <Button
                    onClick={() => { dispatch(decreaseCartItemCount(cartItem[item])); }} >
                    <Icon name='minus' /></Button></Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  onClick={() => { dispatch(removeFromCart(cartItem[item].id)) }} secondary>
                  <Icon name='minus circle' />Remove from Cart</Button>
              </Card.Content>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Cart;
