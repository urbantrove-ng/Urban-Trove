import React from "react";
import { NavLink } from "react-router-dom";
import "../../../css/MiniHeader.css"

export default function MiniHeader() {
  return (
    <div className="miniheader">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/services">Services</NavLink>
    </div>
  );
}
