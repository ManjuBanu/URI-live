
import React from 'react';
import { connect } from 'react-redux';
import {cartDropDownToggle} from './../../redux/cart/act-cart';
import {selectCartItemsCount} from './../../redux/cart/selectors-cart.js';
import {createStructuredSelector} from 'reselect';


import {CartContainer,ShoppingIcon,ItemCountContainer} from './style-cart-icon';

const CartIcon = ({toggleCartHidden, itemCount} ) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);   

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(cartDropDownToggle())
});


/** need to check the commended mapStateToProps , bcz getting error on this */


// const mapStateToProps = ({cart:{cartItems}}) =>(  
//   {
//     itemCount : cartItems.reduce((accumulatedQuantity , cartItem) => 
//     accumulatedQuantity + cartItem.quantity,
//     )
//   }
// )
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});


export default connect(mapStateToProps,mapDispatchToProps
)(CartIcon);



