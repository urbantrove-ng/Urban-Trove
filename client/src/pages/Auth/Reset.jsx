import React, { useState, useContext } from "react";
import { RecoveryContext } from "../App";
import axios from "axios";
import "./global.component.css";

export default function Reset() {
  const [password, setPassword] = useState("");
  const { setPage, email } = useContext(RecoveryContext);
  function changePassword() {
    if (password) {
      try {
        axios
          .put("http://localhost:5000/update-password", {
            email: email,
            newPassword: password,
          })
          .then(() => setPage("login"));
        return alert("Password changed successfully, please login!");
      } catch (error) {
        console.log(error);
      }
    }
    return alert("Please enter your new Password");
  }

  return (
    <div className="container">
      <h2> Change Password </h2>
      <form className="form">
        <label /> New Password:
        <input
          type="password"
          placeholder="••••••••"
          required=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => changePassword()}>Reset passwod </button>
      </form>
    </div>
  );
}
