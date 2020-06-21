
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/selector-shop';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionOverview from './collection-overview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

// const CollectionsOverviewContainer = withRouter(     ==> it will more complecated to understand
//     connect(mapStateToProps,WithSpinner
//   )(CollectionOverview))

export default CollectionsOverviewContainer;