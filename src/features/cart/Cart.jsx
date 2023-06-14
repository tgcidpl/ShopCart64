import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementedQuantity,
  decrementedQuantity,
  removedFromCart,
} from "./cartSlice";
import { Total } from "../total/Total";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.navbar.toggleCartOpen);

  const dispatch = useDispatch();

  function getMaxQuantity(id) {
    const inventoryItem = cart.find((item) => item.id === id);
    const maxQuantity = inventoryItem ? inventoryItem.maxQuantity : 0;
    return maxQuantity > 0 ? maxQuantity : 0;
  }

  const renderedCartItemList = cart.map((item) => (
    <div className="cart-list-item" key={item.id}>
      <h4>{item.name}</h4>
      <strong>${item.price}</strong>
      <div className="cart-list-item__incrDec">
        <button
          onClick={() => dispatch(decrementedQuantity(item.id))}
          disabled={item.quantity === 1}
        >
          -
        </button>
        <p>No: {item.quantity}</p>
        <button
          onClick={() =>
            item.quantity < getMaxQuantity(item.id)
              ? dispatch(incrementedQuantity(item.id))
              : null
          }
          disabled={item.quantity >= getMaxQuantity(item.id)}
        >
          +
        </button>
      </div>
      <button onClick={() => dispatch(removedFromCart(item.id))}>
        Remove From Cart
      </button>
    </div>
  ));

  return (
    <section className={`cart ${isOpen ? "open" : ""}`}>
      <h3 className="cart-text">Your Cart:</h3>
      <div className="cart-list">{renderedCartItemList}</div>
      <Total />
      <button
        disabled={renderedCartItemList.length === 0}
        onClick={() => checkoutModal.showModal()}
      >
        Proceed to Checkout
      </button>
      <dialog className="cart-modal" id="checkoutModal">
        <h3>Thank you for testing out the shopping cart project!</h3>
        <button onClick={() => checkoutModal.close()}>Close</button>
      </dialog>
    </section>
  );
};
