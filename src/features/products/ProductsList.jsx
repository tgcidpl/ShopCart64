import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addedToCart } from "../cart/cartSlice";
import { Products } from "./Products";

export const ProductsList = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [renderedItemList, setRenderedItemList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkItemsInCart = (itemId, itemMaxQuantity) => {
    return cart.some(
      (item) => item.id === itemId && item.quantity >= itemMaxQuantity
    );
  };

  const handleAddToCart = async (id, name, price, maxQuantity) => {
    setIsLoading(true);
    await dispatch(
      addedToCart({
        id,
        name,
        price,
        maxQuantity,
      })
    );
    setIsLoading(false);
  };

  useEffect(() => {
    Products().then((productsArray) => {
      const itemList = productsArray.map((item) => (
        <article className="itemList-item" key={item.id}>
          <img
            className="itemList-item__image"
            src={item.image}
            alt="item-photo"
          />
          <h4>Product name: {item.name}</h4>
          <h4>Brand: {item.brand}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button
            onClick={() =>
              handleAddToCart(item.id, item.name, item.price, item.quantity)
            }
            disabled={checkItemsInCart(item.id, item.quantity) || isLoading}
          >
            {isLoading ? "Adding..." : "Add to Cart"}
          </button>
        </article>
      ));
      setRenderedItemList(itemList);
    });
  }, [dispatch, cart, isLoading]);

  if (!renderedItemList) {
    return <div>Loading products...</div>;
  }

  return (
    <section className="itemList-print">
      <h2>Products:</h2>
      <div className="itemList-print__area">{renderedItemList}</div>
    </section>
  );
};
