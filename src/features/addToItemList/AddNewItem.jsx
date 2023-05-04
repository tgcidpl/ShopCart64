import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { newItemAdded } from '../itemList/itemListSlice'

export const AddNewItem = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')

  const dispatch = useDispatch()

// TODO: price accepts more than 2 decimal spaces

  const onNameChanged = e => setName(e.target.value)
  const onPriceChanged = e => setPrice(parseFloat(e.target.value))
  const onQuantityChanged = e => setQuantity(parseInt(e.target.value))
  const onAddNewItemClicked = () => {
    if (typeof name === 'string' && price && Number.isInteger(quantity)) {
      dispatch(
        newItemAdded({
          id: nanoid(),
          name,
          price,
          quantity
        })
      )
      setName('')
      setPrice('')
      setQuantity('')
    return
    }
    console.log('error')
  }

  return (
    <section>
      <h2>Add a New Item</h2>
      <form>
        <label htmlFor="name">Eneter Product's Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={onPriceChanged}
          
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={quantity}
          onChange={onQuantityChanged}
        />
        <button type="button" onClick={onAddNewItemClicked}>Add New Item</button>
      </form>
    </section>
  )
}