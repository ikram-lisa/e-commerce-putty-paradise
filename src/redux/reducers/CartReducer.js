

// inoitalState
const initialState = {
    cartItems: [],
    hidden: false
    // count:0
}


const reducer = (state=initialState, action) => {
  switch(action.type)
  {
    case "ADD": {
        let item = state.cartItems.find( item => item.id === action.data.id);
        let itemsFiltered = state.cartItems.filter(item => item.id !== action.data.id) ;

        if(item)
        {
            item.quantite += 1 ;
        }
        else {
           item = { ...action.data, quantite:1}
        }
        return {
          ...state,
          cartItems : [...itemsFiltered, item]
        }
      }
      case "TOGGLE-CART" : {
          return {
              ...state,
              hidden:!state.hidden
          }
      }
    //   case "DECREASE": {
    //     return {
    //       count:state.count + 1
    //     }
    //   }
    //   case "INCREASE": {
    //     return {
    //       count:state.count - 1
    //     }
    //   }

    default: {
      return state ;
    }
  }
}


export default reducer ;
