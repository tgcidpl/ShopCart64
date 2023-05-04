import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {
  const cart = useSelector(state => state.cart)

  const renderedCart = cart.map(item => (
    <article className="cart-item" key={item.id}>
      <span>Item ID: {item.id}</span>
      <h3>name: {item.name}</h3>
      <p>price: {item.price}</p>
      <p>quantity: {item.quantity}</p>
    </article>
  ))

  return (
    <section className="cart-print">
      <h2>Cart items:</h2>
      <div className="cart-print_area">
        {renderedCart}
      </div>
      <button onClick={()=>console.log(cart)}>Log cart </button>
    </section>
  )
}