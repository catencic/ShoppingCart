
const filtersInitialState = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ''
  
  }

  type ActionsType = 
 | { type: 'sortByPrice' , payload: {} }
 | { type: 'filterByStock' , payload: {} }
 | { type: 'filterByDelivery' , payload: {} }
 | { type: 'filterByRating' , payload: {} }
 | { type: 'filterBySearch' , payload: {} }
 | { type: 'clearFilters' , payload: {} }


export const filtersReducer = (state : any, action : ActionsType) => {
  switch (action.type) {
      case 'sortByPrice':
          return {
              ...state,
              sort: action.payload
          }
          case 'filterByStock':
            return {
                ...state,
                byStock: !state.byStock
            }
            case 'filterByDelivery':
            return {
                ...state,
                byFastDelivery: !state.byFastDelivery
            }
            case 'filterByRating':
            return {
                ...state,
                byRating: action.payload
            }
            case 'filterBySearch':
            return {
                ...state,
                searchQuery: action.payload
            }

            case 'clearFilters':
                return {
                    filtersInitialState
                }
       

          
  
      default:
          return state;
  }

    
}