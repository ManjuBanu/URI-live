import React from 'react';
import styled from 'styled-components';
import DropDowns from './DropDowns';


import { FormTextAreaContainer,
    ContactContainer,
    FormInputContainer, 
    FormInputLabel,
    StyledContainer,
    StyledChildContainer,
    ContactSpan,
    StyledButton,
    ContactTitle} from './style-contact';

class Contact extends React.Component {


render(){

    return(
    <div>
    <ContactContainer>
    <ContactTitle>Write something.... </ContactTitle>
    <ContactSpan>Will respond you soon.!! </ContactSpan>
    <form>
    <StyledContainer>
      <StyledChildContainer>
          <FormInputLabel for="fname">First Name</FormInputLabel>
          <FormInputContainer type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </StyledChildContainer>
      <StyledChildContainer>
            <FormInputLabel for="lname">Last Name</FormInputLabel>
            <FormInputContainer type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </StyledChildContainer>
    </StyledContainer>


    <StyledContainer>
      <StyledChildContainer>
          <FormInputLabel for="fname">Email</FormInputLabel>
          <FormInputContainer type="email" id="email" name="email" placeholder="Your email.."/>
      </StyledChildContainer>
      <StyledChildContainer>
          <FormInputLabel for="lname">Phone</FormInputLabel>
          <FormInputContainer type="phone" id="phone" name="phone" placeholder="Your phone number.."/>
      </StyledChildContainer>
    </StyledContainer>
   <DropDowns/>

    <FormInputLabel for="subject">Subject</FormInputLabel>
    <FormTextAreaContainer id="subject" name="subject" placeholder="Write something.."></FormTextAreaContainer>

    <StyledButton type='submit'>SUBMIT</StyledButton>
  </form>
    </ContactContainer>
   </div>
  );
}
}

export default Contact;



// <FormInputLabel for="country">Country</FormInputLabel>
// <FormSelectContainer id="country" name="country">

// {countries.map(({code, name}) => (
//     <FormOptionContainer code={code} >{name}</FormOptionContainer>
//   ))}

// </FormSelectContainer>