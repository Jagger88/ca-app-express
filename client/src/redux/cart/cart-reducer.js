import {CartActionTypes} from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                hidden: false,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            
        // the cartitems: we will filter will keep items that are true and remove ones that are false
        // the condition will return true ie keep if the id of the item doesn't match the item we want to remove.
            return {
                ...state,
                cartItems: state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
                )
            };
        default:
        return state;
    }
   }

export default cartReducer;
