import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collections/collections';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;

// import React from 'react';
// import {Route} from 'react-router-dom';
// import CollectionOverview from '../../components/collection-overview/collection-overview';
// import CollectionPage from '../collections/collections';

//  const ShopPage = ({match}) =>(
//             <div className="shop-page">
//                 <Route exact path={`${match.path}`} component={CollectionOverview} />
//                 <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
//             </div>
//         );


// export default ShopPage;