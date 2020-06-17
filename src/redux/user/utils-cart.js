export const addItemToCart = (cartItems , ItemsToAdd ) =>{
    const existingCartItem = cartItems.find(
        catrItem => catrItem.id === ItemsToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === ItemsToAdd.id 
            ? {...cartItem, quantity : cartItem.quantity}
            : cartItem
        )
    }

    return [...cartItems , {...ItemsToAdd , quantity:1}]
}