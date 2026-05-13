import React, { useReducer } from 'react'
import { cartInitialState,cartReducer } from './cartReducer'


export const CartContext = React.createContext()

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  return (
    <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
  )
}

export default CartProvider