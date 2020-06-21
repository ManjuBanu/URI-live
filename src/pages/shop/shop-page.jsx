import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from './../../components/collection-overview/container-collection-overview';
// import {firestore,convertCollectionsSnapshotToMap} from './../../firebase/firebase-util';
import {connect} from 'react-redux';
import {fetchCollectionsRequestAsync} from './../../redux/shop/act-shop';
import CollectionPageContainer from './../collections/container-collection';



/** we used container to coresponding component...bcz there is no belongs to shop com  */
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// render={props => (
//   <CollectionsOverviewWithSpinner isLoading={isCollectionsFetch} {...props} />
// )}

// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
// render={props => (
//   <CollectionPageWithSpinner isLoading={isCollectionsFetch} {...props} />
// )}


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
    const {match} =this.props;
    // const {loading} = this.state;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
      </div>
    );
  }
} 

// const mapStateToProps = createStructuredSelector({
//   isCollectionsFetch :selectIsCollectionFetching
// });


const mapDispatchToProps = dispatch =>({
  fetchCollectionsRequestAsync:()=>dispatch(fetchCollectionsRequestAsync())
})

export default connect(null,mapDispatchToProps) (ShopPage);