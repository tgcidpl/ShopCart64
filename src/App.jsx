import { Cart } from "./features/cart/cart";
import { ProductsList } from "./features/products/ProductsList";
import { Navbar } from "./features/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ProductsList />
      <Cart />
    </>
  );
}

export default App;
