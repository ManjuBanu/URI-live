import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.jsx'
import {connect} from 'react-redux'

import { selectCollection } from '../../redux/shop/selector-shop.jsx';

import {CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer} from './style-collections';

const CollectionsPage = ({collection}) => {

console.log('match',collection)
const {title,items} = collection;
return(

    <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
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