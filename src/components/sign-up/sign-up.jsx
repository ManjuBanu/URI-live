import React from 'react';
import FormInput from '../form/form-component';
import CustomButton from '../button/button';


import { SignUpContainer,ButtonsBarContainer, SignUpSpan,SignUpTitle} from './style-sign-up';
import { connect } from 'react-redux';
import {signUpStart} from './../../redux/user/act-user';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    
    handleSubmit = async event => {
      event.preventDefault();
      const { signUpStart } = this.props;
      const { displayName, email, password, confirmPassword } = this.state;
  
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
  
      signUpStart({ displayName, email, password });

      /** moved to sagas */
        // event.preventDefault();
    
        // const { displayName, email, password, confirmPassword } = this.state;
    
        // if (password !== confirmPassword) {
        //   alert("passwords don't match");
        //   return;
        // }
    
        // try {
        //   const { user } = await auth.createUserWithEmailAndPassword(
        //     email,
        //     password
        //   );
    
        //   await createUserProfileDocument(user, { displayName });
    
        //   this.setState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        //   });

        //   console.log('submited', this.state)

        // } catch (error) {
        //   console.error(error);
        // }
      };


    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value})

    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;


        return(
            <SignUpContainer>
            <SignUpTitle>I do not have a account </SignUpTitle>
            <SignUpSpan>Sign up with your email and password </SignUpSpan>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
            >
            </FormInput>
            <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
            >
            </FormInput>
            <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
            >
            </FormInput>
            <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
            >
            </FormInput>
            <ButtonsBarContainer>
            <CustomButton type='submit'>SIGN UP</CustomButton>
            </ButtonsBarContainer>
            </form>
            </SignUpContainer>
        );
    }
}


const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null,mapDispatchToProps) (SignUp);