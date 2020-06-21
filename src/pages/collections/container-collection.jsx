import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching} from '../../redux/shop/selector-shop';
import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionPage from './collections';


/** should pass this one only...but it is not working so passing below one */
// const mapStateToProps = createStructuredSelector({
//   isLoading: state => !selectIsCollectionsLoaded(state)
// });


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
  });

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;