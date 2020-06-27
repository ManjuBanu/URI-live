import React from 'react';
// import FormInput from './../../components/form/form-component';
import {Countries} from './countries.js';

import { FormTextAreaContainer,
    FormSelectContainer,
    ContactContainer,
    FormInputContainer, 
    FormInputLabel,
    ContactSpan,
    FormOptionContainer,
    ContactTitle} from './style-contact';


class Contact extends React.Component {
constructor() {
    super();

    this.state = {
     countries : Countries
    };
}



render(){
    const {countries} =this.state;
    return(
    <div>
    <ContactContainer>
    <ContactTitle>I do not have a account </ContactTitle>
    <ContactSpan>Sign up with your email and password </ContactSpan>
    <form>
    <FormInputLabel for="fname">First Name</FormInputLabel>
    <FormInputContainer type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <FormInputLabel for="lname">Last Name</FormInputLabel>
    <FormInputContainer type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <FormInputLabel for="country">Country</FormInputLabel>
    <FormSelectContainer id="country" name="country">
    
    {countries.map(({code, name}) => (
        <FormOptionContainer code={code} >{name}</FormOptionContainer>
      ))}

    </FormSelectContainer>

    <FormInputLabel for="subject">Subject</FormInputLabel>
    <FormTextAreaContainer id="subject" name="subject" placeholder="Write something.."></FormTextAreaContainer>

    <input type="submit" value="Submit"/>
  </form>
    </ContactContainer>
   </div>
  );
}
}

export default Contact;


