// import memoize from 'lodash.memoize';
// we added the memoize helper from lodash because the selector below uses the URL parameter is passed in from mapStateToProps function..
// this means that this selector is run each and everytime state changes. 
// by wrapping that particular selector in memoize, it will only return if the value returned is different.

import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector (
  [selectShop],
  shop => shop.shopItems
)

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
// the keys are the collection names.. hats, jackets, etc.
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []);
      
// the COLLECTION_ID_MAP function will do a translation of the variable to get the string mapping from the mapping table above
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

  export const selectIsCollectionFetching =  createSelector(
    [selectShop],
    shop => shop.isFetching
  );