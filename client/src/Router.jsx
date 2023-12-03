import React, { useContext, useEffect } from "react";
import LoginPage from "./pages/Auth/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Auth/SignupPage";
import ForgotPage from "./pages/Auth/ForgotPage";
import HomePage from "./pages/Layout/HomePage";
import AboutPage from "./pages/Layout/AboutPage";
import ContactPage from "./pages/Layout/ContactPage";

// Routes from home page
import Homepage from "./pages/Layout/HomePage";
import Services from "./pages/Products/Services";
import ProductDetail from "./Pages/Products/ProductDetail";
import ServiceDetails from "./Pages/Products/ServiceDetails";

import "./App.css";

// import AuthContext from "./components/Account/AuthContext";

export default function ProjectRoutes() {
  // const authCxt = useContext(AuthContext);
  // //this useeffect for logout autometic after 60 mins
  // useEffect(() => {
  //   setTimeout(() => {
  //     authCxt.logout();
  //     // Redirect("/Landing page");
  //   }, 60 * 60 * 1000);
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          {/* <Header />
          <Routes> */}
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/products/:details" element={<ProductDetail />} />
          <Route path="/services/:name" element={<ServiceDetails />} />
          {/* </Routes>
          <Footer /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpass" element={<ForgotPage />} />
        </Routes>
      </Router>
    </>
  );
}
