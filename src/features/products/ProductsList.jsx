import React from "react";
import { useDispatch } from "react-redux";
import { addedToCart } from "../cart/cartSlice";
import { Products } from "./Products";

export const ProductsList = () => {
  const dispatch = useDispatch();

  console.log(Products());
  const itemList = [];
  const renderedItemList = itemList.map((item) => (
    <article className="itemList-item" key={item.id}>
      <p>Item ID: {item.id}</p>
      <h4>Product name: {item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button
        onClick={() =>
          dispatch(
            addedToCart({
              id: item.id,
              name: item.name,
              price: item.price,
            })
          )
        }
      >
        Add to Cart
      </button>
    </article>
  ));

  return (
    <section className="itemList-print">
      <h2>Products:</h2>
      <div className="itemList-print_area">{renderedItemList}</div>
    </section>
  );
};
