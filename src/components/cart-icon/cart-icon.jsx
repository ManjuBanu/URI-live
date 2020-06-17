
import React from 'react';
import { connect } from 'react-redux';

import {cartDropDownToggle} from './../../redux/cart/act-cart';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from './../../redux/cart/selectors-cart.js';
import {createStructuredSelector} from 'reselect';

import './cart-icon.scss';

const CartIcon = ({toggleCartHidden, itemCount} ) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
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



