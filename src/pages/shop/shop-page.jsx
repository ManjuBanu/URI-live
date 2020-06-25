import React, {Suspense} from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsRequest} from './../../redux/shop/act-shop';
import  { ShopPageContainer } from './style-shop';
import Spinner from './../../components/spinner/spinner'

// import CollectionsOverviewContainer from './../../components/collection-overview/container-collection-overview';
// import {firestore,convertCollectionsSnapshotToMap} from './../../firebase/firebase-util';
// import CollectionPageContainer from './../collections/container-collection';



/** we used container to coresponding component...bcz there is no belongs to shop com  */
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// render={props => (
//   <CollectionsOverviewWithSpinner isLoading={isCollectionsFetch} {...props} />
// )}

// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
// render={props => (
//   <CollectionPageWithSpinner isLoading={isCollectionsFetch} {...props} />
// )}


const CollectionsOverviewContainer = React.lazy(() =>
  import('./../../components/collection-overview/container-collection-overview')
);

const CollectionPageContainer = React.lazy(() =>
  import('./../collections/container-collection')
);

class ShopPage extends React.Component{
  // state ={
  //   loading : true,
  // }
  // unsubscribeFromSnapshot = null;

componentDidMount(){
  
  const {fetchCollectionsRequest} = this.props;
  fetchCollectionsRequest();

  /** replacing thunk with saga  */
// const {fetchCollectionsRequestAsync} = this.props;
// fetchCollectionsRequestAsync();

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
      <ShopPageContainer>
      <Suspense fallback={<Spinner/>}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
      </Suspense>
      </ShopPageContainer>
    );
  }
} 

// const mapStateToProps = createStructuredSelector({
//   isCollectionsFetch :selectIsCollectionFetching
// });


const mapDispatchToProps = dispatch =>({
  // fetchCollectionsRequestAsync:()=>dispatch(fetchCollectionsRequestAsync())
  fetchCollectionsRequest: () => dispatch(fetchCollectionsRequest())
})

export default connect(null,mapDispatchToProps) (ShopPage);