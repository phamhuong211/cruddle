import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./childComponents/Dashboard";
import ProductById from "./childComponents/ProductById";
import Products from "./childComponents/Products";
import Users from "./childComponents/Users";

function FrameRoutes(user) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard user={user}/>}/>
      <Route path="/products" element={<Products user={user} />}/>
      <Route path="/users" element={<Users user={user}/>}/>
      <Route path="/dashboard" element={<Dashboard user={user}/>}/>
      <Route path ="/products/:id" element={<ProductById/>}/>
    </Routes>
  );
}

export default FrameRoutes;