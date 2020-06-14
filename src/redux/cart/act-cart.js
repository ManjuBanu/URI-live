import cartActionTypes from './type-cart';

export const cartDropDownToggle = () =>({
    type: cartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = (item) =>({
type:cartActionTypes.ADD_ITEM,
payload:item
})