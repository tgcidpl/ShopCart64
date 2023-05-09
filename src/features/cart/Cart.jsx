import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementedQuantity, decrementedQuantity, removedFromCart } from './cartSlice'

export const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const renderedItemList = cart.map(item => (
    <div className="itemList-item" key={item.id}>
      <span>Item ID: {item.id}</span>
      <h3>name: {item.name}</h3>
      <p>price: {item.price}</p>
      <p>quantity: {item.quantity}</p>
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