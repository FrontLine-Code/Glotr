import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "../components/product/ProductDetail";
import { useAuth } from "../context/AuthContext";
import Profile from "../pages/Profil";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { PrivateRoute } from "./PrivateRoute";
import { ProductList } from "../components/product/ProductList";

export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute
              component={Profile}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </Router>
  );
};