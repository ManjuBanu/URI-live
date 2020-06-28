import React ,{useState} from 'react';
import CustomButton from './../button/button';
import FormInput from './../form/form-component';
import {googleSignInStart,emailSignInStart} from './../../redux/user/act-user';
import {connect} from 'react-redux';

import {SignInContainer,
  SignInTitle,
  StyledCustomButton,
  SignUpSpan,
  ButtonsBarContainer} from './style-sign-in';

/** class component coverted to functional component [useState] ref [sign-up] for better understanding*/

  const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
      });
    
      const { email, password } = userCredentials;

    const handleSubmit = async event => {
      event.preventDefault();

      emailSignInStart(email, password);
      // event.preventDefault();
      // const { emailSignInStart } = this.props;
      // const { email, password } = this.state;
  
      // emailSignInStart(email, password);
    };

      // try {
      //   await auth.signInWithEmailAndPassword(email, password);
      //   this.setState({ email: '', password: '' });
      // } catch (error) {
      //   console.log(error);
      // }

  
    const handleChange = event => {
      const { value, name } = event.target;
      setCredentials({ ...userCredentials, [name]: value });
      // this.setState({ [name]: value });
    };

      return (
        <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <SignUpSpan>Sign in with your email and password</SignUpSpan>
  
          <form onSubmit={handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={password}
              handleChange={handleChange}
              label='password'
              required
            />
            <ButtonsBarContainer>
              <CustomButton type='submit'> Sign in </CustomButton>
              <StyledCustomButton
              type = 'button'
              onClick={googleSignInStart} isGoogleSignIn>
                Sign in with Google
              </StyledCustomButton>
            </ButtonsBarContainer>
          </form>
        </SignInContainer>
      );
    }


  const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
  })
  
  export default connect(null,mapDispatchToProps)(SignIn);


