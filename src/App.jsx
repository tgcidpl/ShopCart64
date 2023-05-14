import "./App.scss";
import { AddToItemList } from "./features/addToItemList/AddToItemList";
import { Cart } from "./features/cart/cart";
import { ItemList } from "./features/itemList/ItemList";

function App() {
  return (
    <>
      <ItemList />
      {/* below component is only used to temporarily add new items to ItemList */}
      {/* <AddToItemList /> */}
      <Cart />
    </>
  );
}

export default App;
