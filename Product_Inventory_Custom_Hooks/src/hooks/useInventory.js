import { useState } from 'react';

export const useInventory = (products) => {
  const [inventory, setInventory] = useState(products)

  const removeProduct = (id) => {
    setInventory(inventory.filter((product) => product.id !== id))
  }

  const addProduct = (newProduct) => {
    setInventory([...inventory, newProduct])
  }

  return { inventory, removeProduct, addProduct }
}
