import { getTotalInStore } from "./getTotal";

export function Total() {
  getTotalInStore;
  return (
    <section className="total">
      <h4>Order Summary:</h4>
      <span>total ({getTotalInStore().totalQuantity} items): </span>
      <strong>${getTotalInStore().totalPrice.toFixed(2)}</strong>
    </section>
  );
}
