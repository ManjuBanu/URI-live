import React from 'react';
import { Route } from 'react-router-dom';
import {createStructuredSelector } from 'reselect';

import WithSpinner from  './../../components/with-spinner/with-spinner';

import CollectionsOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collections/collections';
// import {firestore,convertCollectionsSnapshotToMap} from './../../firebase/firebase-util';
import {connect} from 'react-redux';
import {fetchCollectionsRequestAsync} from './../../redux/shop/act-shop';
import {selectIsCollectionsFetching} from './../../redux/shop/selector-shop';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component{
  // state ={
  //   loading : true,
  // }
  // unsubscribeFromSnapshot = null;

componentDidMount(){

const {fetchCollectionsRequestAsync} = this.props;
fetchCollectionsRequestAsync();

//   /** [these codes moved to redux reducer] */
//   const {updateCollection} = this.props;
//   const collectionRef = firestore.collection('collections');

// /** another way [promises] of getting data from firebase using promises */
//   // collectionRef.get().then(snapShot =>{
//   //     let collectionMap = convertCollectionsSnapshotToMap(snapShot);
//   //     updateCollection(collectionMap);
//   //     this.setState({loading:false})
//   // }
//   // )


//   /** using [API] ...it will take more time to load */
//   // fetch('https://firestore.googleapis.com/v1/projects/ecomm-db-ad897/databases/(default)/documents/collections')
//   // .then(response =>response.json())
//   // .then(collections => console.log('collection API', collections));

// /**  way of [observable patters --(for firebase)] */
//   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot =>{
//     let collectionMap = convertCollectionsSnapshotToMap(snapShot);
//     updateCollection(collectionMap);
//     this.setState({loading:false})
//   })


}



  render(){
    const {match,isCollectionsFetch} =this.props;
    // const {loading} = this.state;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isCollectionsFetch} {...props} />
        )}
        />
        <Route path={`${match.path}/:collectionId`} 
        render={props => (
          <CollectionPageWithSpinner isLoading={isCollectionsFetch} {...props} />
        )}
        />
      </div>
    );
  }
} 

const mapStateToProps = createStructuredSelector({
  isCollectionsFetch :selectIsCollectionsFetching
});


const mapDispatchToProps = dispatch =>({
  fetchCollectionsRequestAsync:()=>dispatch(fetchCollectionsRequestAsync())
})

export default connect(mapStateToProps,mapDispatchToProps) (ShopPage);