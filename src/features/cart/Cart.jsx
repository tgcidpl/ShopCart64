import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {
  const cart = useSelector(state => state.cart)

  const renderedItemList = cart.map(item => (
    <article className="itemList-item" key={item.id}>
      <span>Item ID: {item.id}</span>
      <h3>name: {item.name}</h3>
      <p>price: {item.price}</p>
      <p>quantity: {item.quantity}</p>
    </article>
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