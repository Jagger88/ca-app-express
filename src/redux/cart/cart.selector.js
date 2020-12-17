import { createSelector } from 'reselect';

// selector will get the state and just pull as slice of it 
const selectCart = state => state.cart;

// use createSelector which has 2 parameters: input(s), output of what we are trying to return
export const selectCartItems = createSelector(
    [selectCart], cart => cart.cartItems  
    );

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
        cartItems=>   cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity, 0
            )
    );

export const selectCartItemTotal = createSelector(
    [selectCartItems], 
        cartItems=>   cartItems.reduce(
            (accumulatedTotal, cartItem) =>
            accumulatedTotal + (cartItem.quantity * cartItem.price), 0
            )
    );

export const selectCartHidden = createSelector (
    [selectCart],
    cart=> cart.hidden
);

    