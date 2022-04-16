import { ProductProps } from "../interfaces/interfaces";

/* const initialState = {
    products: [],
    cart: [],
} */
type ActionsType = 
 | { type: 'addToCart' , payload: ProductProps }
 | { type: 'removeFromCart' , payload: ProductProps }
 | { type: 'changeCartQty' , payload: ProductProps }

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
            case 'changeCartQty':
                return {
                    ...state,
                    cart: state.cart.filter((c: ProductProps) => c.id === action.payload.id
                    ? c.qty = action.payload.qty
                    : c.qty
                    )
                }   

          
  
      default:
          return state;
  }

    
}
