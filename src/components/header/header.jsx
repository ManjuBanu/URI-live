import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from './../../firebase/firebase-util';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon';
import CartDropdown from './../cart-dropdown/cart-dropdown';
import {selectCurrentUser} from './../../redux/user/selector-user';
import {selectCartHidden} from './../../redux/cart/selectors-cart';
import {createStructuredSelector} from 'reselect';
 

import {HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink} from './style-header';

const Header = ({ currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon/>
      {
        hidden ? null : <CartDropdown/>
      }
      
    </OptionsContainer>
  </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden : selectCartHidden,
})

export default connect (mapStateToProps)(Header);



