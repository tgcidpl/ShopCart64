import React from 'react'
import { useSelector } from 'react-redux'

export const ItemList = () => {
  const itemList = useSelector(state => state.itemList)

  const renderedItemList = itemList.map(item => (
    <article className="itemList-item" key={item.id}>
      <span>Item ID: {item.id}</span>
      <h3>name: {item.name}</h3>
      <p>price: {item.price}</p>
      <p>quantity: {item.quantity}</p>
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