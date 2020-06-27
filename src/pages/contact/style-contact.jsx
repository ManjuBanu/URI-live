import styled, { css } from 'styled-components';

const subColor = 'grey';
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
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    margin: 0;
    text-align:center;
  }
  `;

export const FormInputLabel = styled.label`
color:red;
font-size: 16px;
font-weight: normal;
left: 5px;
top: 10px;
transition: 300ms ease all;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: green;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 25px 0;


  /* &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  } */
`;

export const FormSelectContainer = styled.select`
  background: none;
  background-color: white;
  color: green;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 50%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 25px 0;


  /* &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  } */
`;
export const FormOptionContainer = styled.option`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 25px 0;
`;

export const FormTextAreaContainer = styled.textarea`
  background: none;
  background-color: white;
  color: green;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
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