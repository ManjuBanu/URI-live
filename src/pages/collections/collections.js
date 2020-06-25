import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.jsx'
import {connect} from 'react-redux'

import { selectCollection } from '../../redux/shop/selector-shop.jsx';

import {CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer} from './style-collections';

const CollectionsPage = ({collection,match,history,linkUrl}) => {
const {title,items} = collection;
return(

    <CollectionPageContainer>
    <CollectionTitle onClick = { () => history.push(`${match.url}${linkUrl}`)}>{title}</CollectionTitle>
    <CollectionItemsContainer>
    {
        items.map(item => (
            <CollectionItem key={item.id} item={item}/>
        ))
    }
    </CollectionItemsContainer>
    </CollectionPageContainer>
)
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });


export default connect(mapStateToProps)(CollectionsPage);