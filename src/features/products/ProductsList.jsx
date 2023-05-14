import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addedToCart } from "../cart/cartSlice";
import { Products } from "./Products";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const [renderedItemList, setRenderedItemList] = useState(null);

  useEffect(() => {
    Products().then((productsArray) => {
      const itemList = productsArray.map((item) => (
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
                  quantity: 1,
                  maxQuantity: item.quantity,
                })
              )
            }
          >
            Add to Cart
          </button>
        </article>
      ));
      setRenderedItemList(itemList);
    });
  }, [dispatch]);

  if (!renderedItemList) {
    return <div>Loading...</div>;
  }

  return (
    <section className="itemList-print">
      <h2>Products:</h2>
      <div className="itemList-print_area">{renderedItemList}</div>
    </section>
  );
};
