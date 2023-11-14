import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../Reducers";
const Cart = () => {

  const cardItemNum = useSelector(state => state.cart.cartItemNum)

  const dispatch = useDispatch()

  const quantity = cardItemNum;
  
  return (
    <div className="cartIcon" onClick={() => {dispatch(toggleCart())}}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
