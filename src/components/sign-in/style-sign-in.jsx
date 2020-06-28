import styled from 'styled-components';
import CustomButton from './../button/button';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 70%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    margin: 5px 0;
    text-align:center;
  }
`;
export const SignUpSpan = styled.h4`
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    margin: 0;
    text-align:center;
  }
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 800px) {
    margin-left: 30px;
    display: flex;
    width:80%;
  }

`;

export const StyledCustomButton = styled(CustomButton) `
background-color: #4285f4;
`;
 

// .sign-in {
//     width: 380px;
//     display: flex;
//     flex-direction: column;
  
//     .title {
//       margin: 10px 0;
//     }
  
//     .buttons {
//       display: flex;
//       justify-content: space-between;
//     }
//   }