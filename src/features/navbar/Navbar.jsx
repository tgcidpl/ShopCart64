import React from "react";
import cartIcon from "../../assets/cartIcon.svg";
import { useDispatch } from "react-redux";
import { toggleCartOpen } from "./navbarSlice";
import { getTotalInStore } from "../total/getTotal";

export function Navbar() {
  getTotalInStore;
  const dispatch = useDispatch();
  const handleToggleCart = () => {
    dispatch(toggleCartOpen());
  };

  const totalQuantityInCart = getTotalInStore().totalQuantity;

  return (
    <div className="navbackground">
      <nav className="navbar container">
        <div className="navbar-logo">ShopCart 64</div>
        <button
          in-cart-quantity={totalQuantityInCart}
          onClick={handleToggleCart}
          className={`navbar-cartButton show-quantity`}
        >
          <img src={cartIcon} className="navbar-cartButton__icon" />
        </button>
      </nav>
    </div>
  );
}
