// src/firebase/firebase.utils.js

import firebase from 'firebase/app';

// this project is only going to use the firestore and auth functionality

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcFSOfvB_gqrwNQUN7YqKwdzYdHq5RAeE",
    authDomain: "authdb-141b2.firebaseapp.com",
    databaseURL: "https://authdb-141b2.firebaseio.com",
    projectId: "authdb-141b2",
    storageBucket: "authdb-141b2.appspot.com",
    messagingSenderId: "187774266974",
    appId: "1:187774266974:web:132177a2dfc5ced4d0cecf"
  };

  firebase.initializeApp(config);
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if signed out, then userAuth will be null. then return and do nothing. 
    if (!userAuth) return;
    // reference to the document with the specific id
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // .get() will give us the snapshot of the data from that reference object
    // you can still have an empty reference object even if it doesn't exist
    const snapShot = await userRef.get();
    // from the snapshot you can call .exist to see if it exists. .set to set data. or .data() to get data
    if (!snapShot.exists) {
      const { email, displayName } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email, 
          createdAt, 
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }
    // this will return the reference object so that you can use it for future...
   
    return userRef;

  }

  // utility to create a collection and documents from JSON file
  export const addCollectionandDocuments = async (collectionKey, objectsToAdd) => {
    // this will give back a collection reference ...
    // you can use this using a call like this  
    //addCollectionandDocuments('collections',collectionsArray.map(({title, items})=>({title, items})));
    // there is a limit of 500 per batch commit... you can either send them sequentially or group in 500s

    const collectionRef = firestore.collection(collectionKey);
    if (collectionRef.exists) return;

    const batch = firestore.batch();
  
    var count =0;
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      // to batch add the object...set(reference, object to add)
      // hard stop at 100
      if (count < 100) { batch.set(newDocRef, obj)};
      count = count++;
    });
    return await batch.commit();
  }

  // BF : save to audit log
  export const auditLog = async (actiontext) => {
    // if signed out, then userAuth will be null. then return and do nothing. 
    if (!actiontext) return;

      const action = actiontext; // this will be the action log text
      const timestamp = new Date(); // timestamp
      const auditCollectionRef = firestore.collection('audit');
      var response ='';

      try {
        await auditCollectionRef.add({
          timestamp, 
          action
        })
        response = timestamp + ' ' + action;


      } catch(error) {
        console.log('error creating audit record', error.message);
        response ='Write to audit log failed';
      }

    return response;
  }

  // function will convert the array that we get back from firebase and then we will convert to an object map
  export const convertCollectionsSnapshotToMap = (collection) => {
    const transformedCollection = collection.docs.map( doc => { 
      const {title, items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title, 
        items
      };
    })
    // console.log(transformedCollection);
    // use reduce to create the object by cycling through ... 
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator 
      }, {});
  };

  // make auth function available to App
  export const auth = firebase.auth();
  // makes firestore DB available to App
  export const firestore = firebase.firestore();

  // setup google authentication provider
  // we could use other authentication from other providers such as twitter, github, etc.
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'}); // always want account selection
  export const signInWithGoogle = () => auth.signInWithPopup(provider); // want a popup for google auth

  // export out firebase component
  export default firebase;