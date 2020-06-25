
import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  
  @media screen and (max-width: 800px) {
    width: 70%;
  }
`;

export const SignUpTitle = styled.h2`
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
    margin-left:100px;
    display: flex;
    width:80%;
  }

`;


// .sign-up{
//     display:flex;
//     flex-direction: column;
//     width:380px;

//     .title{
//         margin:10px 0;
//     }
// }