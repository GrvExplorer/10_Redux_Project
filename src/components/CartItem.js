import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { addToCart, removeFromCart } from "../Reducers";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const handelRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={handelRemoveFromCart}>
        -
      </button>
      <button className="cart-actions" onClick={handleAddToCart}>
        +
      </button>
    </div>
  );
};

export default CartItem;
