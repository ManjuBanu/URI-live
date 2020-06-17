import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from './../button/button';
import CartItem from './../cart-item/cart-item'
import './cart-dropdown.scss';
import { selectCartItems } from '../../redux/cart/selectors-cart';
import {cartDropDownToggle} from './../../redux/cart/act-cart.js'

const CartDropdown = ({cartItems,history,dispatch}) =>(
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems.length ? (
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
        )
         ))
         :
         (<span className='empty-message'>
         Your cart is empty
         </span>
         )
        }
        <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(cartDropDownToggle());
        }}
      >GO TO CHECKOUT</CustomButton>
    </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
});

// const mapStateToProps =({cart:{cartItems}}) =>({
//     cartItems,
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));