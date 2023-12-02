import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Pages/Homepage/Homepage";
import Products from "./components/Pages/Products/Products";
import Services from "./components/Pages/Products/Services";
import ProductDetail from "./components/Pages/Products/ProductDetail";
import ServiceDetails from "./components/Pages/Products/ServiceDetails";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products/:details" element={<ProductDetail/>} />
        <Route path="/services/:name" element={<ServiceDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}
