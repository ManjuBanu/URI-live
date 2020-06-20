import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import CartItem from './../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/selectors-cart';
import {cartDropDownToggle} from './../../redux/cart/act-cart.js';

import {CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer} from './style-cart-dropdown.jsx';

const CartDropdown = ({cartItems,history,dispatch}) =>(
    <CartDropdownContainer>
    <CartItemsContainer>
    {cartItems.length ? (
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
        )
         ))
         :
         (<EmptyMessageContainer>
         Your cart is empty
         </EmptyMessageContainer>
         )
        }
        <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(cartDropDownToggle());
        }}
      >GO TO CHECKOUT</CartDropdownButton>
    </CartItemsContainer>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
});

// const mapStateToProps =({cart:{cartItems}}) =>({
//     cartItems,
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));