

import './App.css'

import { AppRouter } from './routes/AppRouter'
import { CartContext } from './context/cartContext'
import { products } from './data/data'
import { useReducer } from 'react'
import { cartReducer } from './context/cartReducer'
import { filtersReducer } from './context/filtersReducer'

const CartinitialState = {
  products: [],
  cart: [],
}

const filtersInitialState = {
  sort: '',
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: ''

}

function App() {

      const [cartState, dispatch] = useReducer(cartReducer, CartinitialState);

      const [filtersState, dispatchFilters] = useReducer(filtersReducer, filtersInitialState);

     
  
  return (
    <>
      <CartContext.Provider value={{
        products , 
        cartState , 
        filtersState,
        dispatch,
        dispatchFilters
         }}>

      <AppRouter />
      </CartContext.Provider>
    </>
  )
}

export default App
