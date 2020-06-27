import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon';
import CartDropdown from './../cart-dropdown/cart-dropdown';
import {selectCurrentUser} from './../../redux/user/selector-user';
import {selectCartHidden} from './../../redux/cart/selectors-cart';
import {createStructuredSelector} from 'reselect';
import {signOutStart} from './../../redux/user/act-user';
 


import {HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink} from './style-header';

  

const Header = ({ currentUser, hidden,signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/contact'>  
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink  as='div' onClick={signOutStart}> 
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon/>
      </OptionsContainer>
      {
        hidden ? null : <CartDropdown/>
      }
  </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden : selectCartHidden,
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect (mapStateToProps,mapDispatchToProps)(Header);


//onClick={() => auth.signOut()}
