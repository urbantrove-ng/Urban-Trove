import LoginPage from "./pages/Auth/LoginPage";
import { Routes, Route, useLocation } from "react-router-dom";
import SignupPage from "./pages/Auth/SignupPage";
import ForgotPage from "./pages/Auth/ForgotPage";
import HomePage from "./pages/Layout/HomePage";
import AboutPage from "./pages/Layout/AboutPage";
import ContactPage from "./pages/Layout/ContactPage";
import PaymentMethod from "./components/Payments/PaymentMethod";
import CardPage from "./components/Payments/CardPage";
import SuccessPage from "./components/Payments/SuccessPage";
import { UrbanProvider } from "./context/UrbanContext";
import Homepage from "./pages/Layout/HomePage";
import Products from "./pages/Products/Products";
import Services from "./pages/Products/Services";
import ServiceDetails from "./pages/Products/ServiceDetails";
import "./App.css";
import PersistLogin from "./pages/PersistLogin";
import Cart from "./components/Cart/Cart";
import AppLayout from "./AppLayout";
import { useEffect } from "react";
import ProductDetail from "./pages/Products/ProductDetail";
import Accountdetails from "./components/Account/Accountdetails";
import Account from "./components/Account/Account";
import Orders from "./components/Account/Orders";
import Inbox from "./components/Account/Inbox";
import AccountManagement from "./components/Account/AccountManagement";
import ProtectedRoutes from "./components/Account/ProtectedRoutes";
import OrderDetails from "./components/Account/OrderDetails";
import OrdersList from "./components/Account/OrdersList";
import Verify from "./components/Account/Verify";
import Reset from "./pages/Auth/Reset";
import Terms from "./components/Terms_and_Conditions/Terms";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <UrbanProvider>
      <PersistLogin>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Terms&Conditions" element={<Terms />} />
            <Route path="/verify/:id" element={<Verify />} />
            <Route path="/:category/:subcategory" element={<Products />} />
            <Route path="/catalog" element={<Products />} />

            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/services/:name" element={<ServiceDetails />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/customer" element={<Account />}>
                <Route path="details" element={<Accountdetails />} />
                <Route path="orders" element={<Orders />}>
                  <Route index element={<OrdersList />} />
                  <Route path=":id" element={<OrderDetails />} />
                </Route>
                <Route path="inbox" element={<Inbox />} />
                <Route path="account" element={<AccountManagement />} />
              </Route>
              <Route path="/payment" element={<SuccessPage />} />
            </Route>

            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgotpassword" element={<ForgotPage />} />
            <Route path="/resetpassword/:token" element={<Reset />} />
            <Route path="/payment" element={<PaymentMethod />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Route>
        </Routes>
      </PersistLogin>
    </UrbanProvider>
  );
}

export default App;
