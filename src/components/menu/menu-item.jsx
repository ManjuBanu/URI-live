import React from 'react';
import {withRouter} from 'react-router-dom';
import {  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle} from './style-menu-item';


const MenuItem = ({title,imageUrl,size,match,history,linkUrl}) => ( 
  <MenuItemContainer  
  size={size}
  onClick ={ () => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
