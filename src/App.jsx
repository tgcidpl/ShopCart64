import './App.css'
import { AddNewItem } from './features/addToItemList/AddNewItem'
import { Cart } from './features/cart/cart'
import {ItemList} from './features/itemList/itemList'

function App() {
  return (
    <>
    <ItemList/>
      <AddNewItem/>
      <Cart />
    </>
  )
}

export default App
