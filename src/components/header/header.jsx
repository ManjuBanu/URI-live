import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';
import {auth} from './../../firebase/firebase-util';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon';
import CartDropdown from './../cart-dropdown/cart-dropdown';
import {selectCurrentUser} from './../../redux/user/selector-user';
import {selectCartHidden} from './../../redux/cart/selectors-cart';
import {createStructuredSelector} from 'reselect';
 

const Header = ({ currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
      {
        hidden ? null : <CartDropdown/>
      }
      
    </div>
  </div>
);


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden : selectCartHidden,
})

export default connect (mapStateToProps)(Header);



