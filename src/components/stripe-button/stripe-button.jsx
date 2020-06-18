import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
const priceForStripe = price * 100;
const publishableKey = 'pk_test_51GvIrJD7KU7Oaq2dPtQrTRdnsWqX8FHiTexn6zD07viA5OdzGQbWjwE9nLjDTkXdapn9Dz76g3X26LpzEaf6k9uK00lyQFZV4h'

const onToken = token =>{
    console.log('token',token);
    alert('Payment Successful')
}

return(
    <StripeCheckout
    label='Pay Now'
    name='URI Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Payable amount is $${price}`}
    amount ={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
);
};


export default StripeCheckoutButton;
