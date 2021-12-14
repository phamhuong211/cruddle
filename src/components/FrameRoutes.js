import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./childComponents/Dashboard/Dashboard";
import ProductById from "./childComponents/Products/ProductById";
import Products from "./childComponents/Products/Products";
import Users from "./childComponents/Users/Users";
import Setting from "./childComponents/Setting/Setting";

function FrameRoutes(user) {
  // console.log("routes ", user)
  return (
    <Routes>
      <Route path="/login"></Route>
      <Route path="/" element={<Dashboard user={user}/>}/>
      <Route path="/products" element={<Products user={user} />}/>
      <Route path="/users" element={<Users user={user}/>}/>
      <Route path="/setting" element={<Setting user={user}/>}/>
      <Route path="/dashboard" element={<Dashboard user={user}/>}/>
      <Route path ="/products/:id" element={<ProductById/>}/>
    </Routes>
  );
}

export default FrameRoutes;