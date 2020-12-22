import {ShopActionTypes} from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections'); // get collection ref from firestore
        
        // dispatch our start call action to initiate the subscription with redux-thunk
        dispatch(fetchCollectionsStart());
        // get snapshot that contains the data from the collection ref
        collectionRef.get().then((snapshot) => {
            // use the firebase utility to convert the firebase array into the object shape
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        

        }).catch(error=> dispatch(fetchCollectionsFailure(error.message))); 
    }
};

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})