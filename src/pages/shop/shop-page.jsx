import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collections/collections';
import {firestore,convertCollectionsSnapshotToMap} from './../../firebase/firebase-util';
import {connect} from 'react-redux';
import {updateCollections} from './../../redux/shop/act-shop';

class ShopPage extends React.Component{
  unsubscribeFromSnapshot = null;

componentDidMount(){
  const {updateCollection} = this.props;
  const collectionRef = firestore.collection('collection');

  this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot =>{
    let collectionMap = convertCollectionsSnapshotToMap(snapShot);
    updateCollection(collectionMap)
  })

}



  render(){
    const {match} =this.props;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
} 

const mapDispatchToProps = dispatch =>({
  updateCollection : collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps) (ShopPage);