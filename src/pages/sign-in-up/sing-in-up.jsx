import React from 'react';

import SignIn from './../../components/sign-in/sign-in';
import SignUp from './../../components/sign-up/sogn-up';

import './sing-in-up.scss';

const SignInSignUp = () =>(
<div className="sign-in-sign-up" >
    <SignIn/>
    <SignUp/>
</div>
);

export default SignInSignUp;