import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const LoginPage = !useSelector(state => state.isLoggedIn)
  console.log(LoginPage);

  return (
    <div className="App">
      {/* { LoginPage && <Auth />}
      { !LoginPage && <Layout />} */}
      { LoginPage ? <Auth/> : <Layout />}
    </div>
  );
}

export default App;
