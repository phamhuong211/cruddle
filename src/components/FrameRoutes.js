import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./childComponents/Dashboard/Dashboard";
import ProductById from "./childComponents/Products/ProductById";
import Products from "./childComponents/Products/Products";
import Users from "./childComponents/Users/Users";
import Setting from "./childComponents/Setting/Setting";
import Stores from "./childComponents/Stores/Stores";
import StoreById from "./childComponents/Stores/StoreById";
import Cart from "./childComponents/Cart/Cart"

function FrameRoutes(user) {
  // console.log("routes ", user)
  return (
    <Routes>
      <Route path="/" element={<Dashboard user={user}/>}/>
      <Route path="/dashboard" element={<Dashboard user={user}/>}/>
      <Route path="/users" element={<Users user={user}/>}/>
      <Route path="/setting" element={<Setting user={user}/>}/>
      <Route path="/products" element={<Products user={user} />}/>
      <Route path ="/products/:id" element={<ProductById/>}/>
      <Route path ="/stores" element={<Stores/>}/>
      <Route path ="/stores/:id" element={<StoreById/>}/>
      <Route path ="/cart" element={<Cart/>}/>
    </Routes>
  );
}

export default FrameRoutes;