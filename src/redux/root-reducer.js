// root-reducer.js
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
//  this will use local storage as default
// import sessionStorage from 'redux-persist/lib/storage/session' // this is for session storage...

// import userReducer from './user/user-reducer';
// import globalReducer from './global/global-reducer';
// import cartReducer from './cart/cart-reducer';
// import editorReducer from './editor/editor-reducer';
// import treeReducer from './tree/tree-reducer';
// import shopReducer from './shop/shop-reducer';
// import directoryReducer from './directory/directory-reducer';

// whitelist is what states we want to persist
// we are going to persist the cart state into local storage
const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
  };
//

const rootReducer = combineReducers ({
    // user: userReducer,
    // global: globalReducer,
    // cart: cartReducer,
    // editor: editorReducer,
    // tree: treeReducer,
    // shop: shopReducer,
    // directory: directoryReducer
});

export default persistReducer (persistConfig, rootReducer);