import React from "react";
import cartIcon from "../../assets/cartIcon.svg";

export function Navbar() {
  return (
    <div className="navbackground">
      <nav className="navbar container">
        <div className="navbar-logo">ShopCart 64</div>
        <button className="navbar-cartButton">
          <img src={cartIcon} className="navbar-cartButton__icon" />
        </button>
      </nav>
    </div>
  );
}
