import ShopActionTypes from './types-shop';

const INITIAL_STATE = {
  collections: null,
  isFetching:false,   // iiLoading state for spinner moved to redux state can be reused anywhere
  errorMessage:undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ShopActionTypes.FETCH_COLLECTIONS_REQUEST:
      return{
        ...state,
        isFetching:true
      }
    
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state,
        isFetching:false,
        collections: action.payload
      }

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching:false,
        errorMessage:action.payload
      }

    // case ShopActionTypes.UPDATE_COLLECTIONS:
    //   return {
    //     ...state,
    //     collections: action.payload
    //   };
    default:
      return state;
  }
};

export default shopReducer;

