import "./App.scss";
import { AddToItemList } from "./features/addToItemList/AddToItemList";
import { Cart } from "./features/cart/cart";
import { ItemList } from "./features/itemList/ItemList";
import { Products } from "./features/products/Products";

function App() {
  return (
    <>
      <Products />
      <ItemList />
      {/* below component is only used to temporarily add new items to ItemList */}
      {/* <AddToItemList /> */}
      <Cart />
    </>
  );
}

export default App;
