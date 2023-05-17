import { useSelector } from "react-redux";

export function Total() {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    return { totalPrice, totalQuantity };
  };
  return (
    <section className="total">
      <h4>Order Summary:</h4>
      <span>total ({getTotal().totalQuantity} items): </span>
      <strong>${getTotal().totalPrice.toFixed(2)}</strong>
    </section>
  );
}
