
import React from 'react';
import { connect } from 'react-redux';

import {cartDropDownToggle} from './../../redux/cart/act-cart';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({toggleCartHidden} ) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(cartDropDownToggle())
});

export default connect(null,mapDispatchToProps
)(CartIcon);



