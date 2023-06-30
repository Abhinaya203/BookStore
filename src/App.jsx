import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ShoppingCart from "./components/Main/ShoppingCart";

//import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Main}></Route>
        <Route path="/loginpage" exact Component={Login}></Route>
        <Route path="/cart" exact Component={ShoppingCart}></Route>
      </Routes>
    </div>
  );
};

export default App;
