import styled, { css } from 'styled-components';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CustomButton from './../../components/button/button';

const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;


export const ContactContainer = styled.div`
 border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  box-sizing: border-box;
  width:50%;
 margin-left:25%;
  @media screen and (max-width: 800px) {
    width: 70%;
  }
`;
export const ContactTitle = styled.h2`
  margin: 10px 0;
  text-align:center;
  @media screen and (max-width: 800px) {
    margin: 5px 0;
    text-align:center;
  }
`;
export const ContactSpan = styled.h4`
text-align:center;
  margin: 10px 0px 20px 0px;

  @media screen and (max-width: 800px) {
    margin: 0;
    text-align:center;
  
  }
  `;

export const FormTextAreaContainer = styled.textarea`
  background: none;
  background-color: white;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 10px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;


export const StyledContainer = styled.div`
  background: none;
  font-size: 18px;
  display: block;
  width: 100%;
  height:80px;
  border: none;
  margin-top:20px;
`;
export const StyledChildContainer = styled.div`
background: none;
  color: black;
  font-size: 18px;
  width: 50%;
  border: none;
  border-radius: 0;
  margin: 0px 0;
  float:left;
  height:80px;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  font-size: 18px;
    padding: 10px 10px 10px 5px;
  display: block;
  width:95%;
  border: 1px solid black;
  border-radius: 0;
margin:8px;
  /* &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  } */
`;

export const FormInputLabel = styled.label`
font-size: 18px;
font-weight: 900;
transition: 300ms ease all;
margin:10px 0px 5px 10px;
`;

export const StyledText = styled.div`
font-size: 18px;
font-weight: 900;
transition: 300ms ease all;
margin:10px 0px 5px 10px;
`;

export const StyledDropDown = styled.div`
  background: none;
  font-size: 18px;
  display: block;
  width: 100%;
  height:90px;
  border: none;
  padding-top:0px;
  margin-bottom:10px;

`;
export const StyledCountryDropdown = styled(CountryDropdown)`
background-color:white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width:47%;
  border: 1px solid black;
  border-radius: 0;
  margin:8px 0px 8px 5px;
float: left;
@media screen and (max-width: 800px) {
    margin:8px 3px 8px 5px;
  }
`;


export const StyledRegionDropdown = styled(RegionDropdown)`
background-color:white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width:47%;
  border: 1px solid black;
  border-radius: 0;
margin:8px 0px 20px 17px;
float: left;
@media screen and (max-width: 800px) {
    margin:8px 3px 8px 5px;
  }
`;


export const StyledButton = styled(CustomButton)`
background-color:darkgrey;
margin-left:38%;
margin-top:50px;
border-radius:20px;
width:0px;
`;

// import styled from 'styled-components';

// export const SignUpContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 380px;
  
//   @media screen and (max-width: 800px) {
//     width: 70%;
//   }
// `;

// export const SignUpTitle = styled.h2`
//   margin: 10px 0;
//   @media screen and (max-width: 800px) {
//     margin: 5px 0;
//     text-align:center;
//   }
// `;
// export const SignUpSpan = styled.h4`
//   margin: 10px 0;
//   @media screen and (max-width: 800px) {
//     margin: 0;
//     text-align:center;
//   }
// `;
// export const ButtonsBarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
  
//   @media screen and (max-width: 800px) {
//     margin-left:100px;
//     display: flex;
//     width:80%;
//   }

// `;


// // .sign-up{
// //     display:flex;
// //     flex-direction: column;
// //     width:380px;

// //     .title{
// //         margin:10px 0;
// //     }
// // }

// export const FormOptionContainer = styled.option`
//   background: none;
//   background-color: white;
//   color: black;
//   font-size: 18px;
//   padding: 10px 10px 10px 5px;
//   display: block;
//   width: 200px;
//   border: none;
//   border-radius: 0;
//   border-bottom: 1px solid black;
//   margin: 25px 0;
// `;