import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {
  const cart = useSelector(state => state.cart)

  const renderedCart = cart.map(item => (
    <article key={item.id}>
      
      <h3>Item ID: {item.id}</h3>
      <span>name: {item.name}</span>
      <p>price: {item.price}</p>
      <p>quantity: {item.quantity}</p>
    </article>
  ))

  return (
    <section className="cart-print">
      <h2>Cart items:</h2>
      {renderedCart}
    </section>
  )
}

// import React from 'react'
// import { store } from '../../app/store'
// import { itemAdded } from './cartSlice'
// import { cartSlice } from './cartSlice'

// function Cart() {
//   console.log(cartSlice.actions.itemAdded())

//   console.log(store)

//   return (
//     <>
//     <div>cart</div>
//   <button onClick={()=>itemAdded({text: "blabla"})}>addItem</button>

//     </>)
// }

// export default Cart