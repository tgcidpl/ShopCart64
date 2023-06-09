import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addedToCart } from "../cart/cartSlice";
import { getProducts } from "../../services/getProducts";

export const ProductsList = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [renderedItemList, setRenderedItemList] = useState(null);

  const checkItemsInCart = (itemId, itemMaxQuantity) => {
    return cart.some(
      (item) => item.id === itemId && item.quantity >= itemMaxQuantity
    );
  };

  const handleAddToCart = (id, name, price, maxQuantity) => {
    dispatch(
      addedToCart({
        id,
        name,
        price,
        maxQuantity,
      })
    );
  };

  useEffect(() => {
    getProducts().then((productsArray) => {
      const itemList = productsArray.map((item) => (
        <article className="itemList-item" key={item.id}>
          <img
            className="itemList-item__image"
            src={item.imageMedium}
            alt="item-photo"
            srcSet={`${item.imageSmall} 600w,
            ${item.imageMedium} 1000w`}
          />
          <h4>Product name: {item.name}</h4>
          <h4>Brand: {item.brand}</h4>
          <p>Price: ${item.price}</p>
          <p>In Stock: {item.quantity}</p>
          <button
            onClick={() =>
              handleAddToCart(item.id, item.name, item.price, item.quantity)
            }
            disabled={checkItemsInCart(item.id, item.quantity)}
          >
            Add to Cart
          </button>
        </article>
      ));
      setRenderedItemList(itemList);
    });
  }, [dispatch, cart]);

  if (!renderedItemList) {
    return <div>Loading products...</div>;
  }

  return (
    <section className="itemList-print container">
      <div className="itemList-print__area">{renderedItemList}</div>
    </section>
  );
};
