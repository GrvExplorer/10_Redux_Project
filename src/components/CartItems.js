import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {

  const cardItems = useSelector(state => state.cart.cartItems)
  console.log(cardItems);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
        {cardItems.map((v, i) => (
          <CartItem key={i} id={i} price={v.price} name={v.name} />
        ))}

        </li>
      </ul>
    </div>
  );
};

export default CartItems;
