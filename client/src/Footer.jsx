import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="quick">
          <h4>Quick Links</h4>
          <Link className="quick-link" to="">
            About
          </Link>
          <Link className="quick-link" to="/products">
            Products
          </Link>
          <Link className="quick-link" to="/services">
            Services
          </Link>
          <Link className="quick-link" to="">
            Cart
          </Link>
          <Link className="quick-link" to="">
            Contact us
          </Link>
          <Link className="quick-link" to="">
            Sell on urban trove
          </Link>
          <Link className="quick-link" to="">
            Checkout
          </Link>
          <Link className="quick-link" to="">
            Privacy policy
          </Link>
          <Link className="quick-link" to="">
            Report fraud
          </Link>
        </div>
        <div className="quick">
          <h4>Enquiries</h4>
          <p>Ask us any question you might have</p>
          <form action="">
            <textarea
              className="textarea"
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="I want ..."
            ></textarea>
            <button>Send &rarr;</button>
          </form>
        </div>
        <div className="quick">
          <h4>Get In Touch</h4>
          <h6>Phone: </h6>
          <h6>Email: </h6>
          <h6>Urban Trove</h6>
          <h6>Address Goes Here</h6>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright &copy; 2024 Urban Trove | All rights reserved.</p>
        <p>
          Designed by{" "}
          <span>
            <Link className="bottom-link" to="/">
              Urban Trove
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
