import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addedToCart  } from '../cart/cartSlice'

export const ItemList = () => {
  const itemList = useSelector(state => state.itemList)
  const dispatch = useDispatch()

  const renderedItemList = itemList.map(item => (
    <article className="itemList-item" key={item.id}>
      <span>Item ID: {item.id}</span>
      <h3>name: {item.name}</h3>
      <p>price: {item.price}</p>
      <p>quantity: {item.quantity}</p>
      <button 
  onClick={() => 
    dispatch(addedToCart({
      id: item.id, name:item.name, price: item.price
    }))
  }>Add to Cart
</button>
    </article>
  ))

  return (
    <section className="itemList-print">
      <h2>ItemList items:</h2>
      <div className="itemList-print_area">
        {renderedItemList}
      </div>
      <button onClick={()=>console.log(itemList)}>Log itemList </button>
    </section>
  )
}