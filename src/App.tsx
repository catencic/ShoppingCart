

import './App.css'

import { AppRouter } from './routes/AppRouter'
import { CartContext } from './context/cartContext'
import { products } from './data/data'
import { useReducer } from 'react'
import { cartReducer } from './context/cartReducer'

const initialState = {
  products: [],
  cart: [],
}

function App() {

      const [cartState, dispatch] = useReducer(cartReducer, initialState);

  
  return (
    <>
      <CartContext.Provider value={{
        products , 
        cartState , 
        dispatch
         }}>

      <AppRouter />
      </CartContext.Provider>
    </>
  )
}

export default App
