import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import CartItems from "./components/CartItems";

function App() {
  const LoginPage = !useSelector(state => state.auth.isLoggedIn)
  const cardItems = !useSelector(state => state.cart.toggleCart)

  return (
    <div className="App">
      { LoginPage ? <Auth/> : <Layout />}
      {cardItems && <CartItems />}
    </div>
  );
}

export default App;
