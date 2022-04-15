import { ProductProps } from "../interfaces/interfaces";

/* const initialState = {
    products: [],
    cart: [],
} */
type ActionsType = 
 | { type: 'addToCart' , payload: ProductProps }
 | { type: 'removeFromCart' , payload: ProductProps }

export const cartReducer = (state : any, action : ActionsType) => {
  switch (action.type) {
      case 'addToCart':
          return {
              ...state,
              cart: [...state.cart, {...action.payload , qty: 1} ]
          }
          case 'removeFromCart':
            return {
                ...state,
                cart: state.cart.filter((c: ProductProps) => c.id !== action.payload.id)
            }   

          
  
      default:
          return state;
  }

    
}
