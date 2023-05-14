import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementedQuantity, decrementedQuantity, removedFromCart } from './cartSlice'

export const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

// function getMaxQuantity(id) {
//   const inventoryItem = inventory.find(item => item.id === id);
//   const maxQuantity = inventoryItem ? inventoryItem.quantity : 0;
//   return maxQuantity > 0 ? maxQuantity : 0;
// }

  const renderedItemList = cart.map(item => (
    <div className="itemList-item" key={item.id}>
      <span>Item ID: {item.id}</span>
      <h3>name: {item.name}</h3>
      <strong>price: ${item.price}</strong>
      <div className='itemList-item__incrDec'>
          <button onClick={() => dispatch(decrementedQuantity(item.id))}>-</button>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(incrementedQuantity(item.id))}>+</button>
        </div>
      <button 
  onClick={() => 
    dispatch(removedFromCart(item.id))
  }>Remove From Cart
</button>
    </div>
  ))

  return (
    <section className="itemList-print">
      <h2>cart items:</h2>
      <div className="itemList-print_area">
        {renderedItemList}
      </div>
      <button onClick={()=>console.log(cart)}>Log cart </button>
    </section>
  )
}