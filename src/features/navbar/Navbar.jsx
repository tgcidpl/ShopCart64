import React from "react";
import cartIcon from "../../assets/cartIcon.svg";
import { useDispatch } from "react-redux";
import { toggleCartOpen } from "./navbarSlice";
import { getTotalInStore } from "../total/getTotal";

export function Navbar() {
  const dispatch = useDispatch();
  const handleToggleCart = () => {
    dispatch(toggleCartOpen());
  };

  const totalQuantityInCart = getTotalInStore().totalQuantity;

  return (
    <div className="navbackground">
      <nav className="navbar container">
        <div className="navbar-logo">ShopCart 64</div>
        <button onClick={handleToggleCart} className={`navbar-cartButton`}>
          {totalQuantityInCart > 0 ? (
            <span className="navbar-cartButton__counter">
              {totalQuantityInCart}
            </span>
          ) : null}
          <img
            src={cartIcon}
            className="navbar-cartButton__icon"
            alt="cart-icon"
          />
        </button>
      </nav>
    </div>
  );
}
