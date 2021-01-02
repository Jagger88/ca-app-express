
// Called from reducer when add item action is triggered
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id===cartItemToAdd.id
        );

    if (existingCartItem) {
        return cartItems.map(cartItem=>
            cartItem.id===cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : {...cartItem}
        )
    } 
    return [...cartItems,  {...cartItemToAdd, quantity:1}]
};

// when removeitem action is fired, the reducer runs this util
// take existing cartitem array find to see if item to remove exists
// if exists and only one left then filter it out. 
// if there are more than 1 then return with 
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
        // you don't need an else clause since the return will circumvent.
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
