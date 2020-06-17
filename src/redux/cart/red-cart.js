import cartActionTypes  from "./type-cart";
import {addItemToCart} from './utils-cart'

const INITIAL_STATE = {
    hidden:true,
    cartItems:[],
}

const cartReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return{
                ...state,
                hidden:!state.hidden
            }
        
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
              };
        default: 
        return state;
}
}

export default cartReducer;