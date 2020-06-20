import React from 'react';

import SignIn from './../../components/sign-in/sign-in';
import SignUp from './../../components/sign-up/sing-up';

import {SignInAndSignUpContainer} from './style-sing-in-up';

const SignInSignUp = () =>(
<SignInAndSignUpContainer >
    <SignIn/>
    <SignUp/>
</SignInAndSignUpContainer>
);

export default SignInSignUp;