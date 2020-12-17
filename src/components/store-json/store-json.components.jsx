import React, { useState } from 'react';
import './store-json.styles.scss';
import {addCollectionandDocuments} from '../../firebase/firebase.utils';


// this component has a simple button for selecting a file as an object. 
// stringify to show the JSON
// otherwise, I think you can simply use it as is
// need to clean up as this renders and fires everytime there is a change in the input text. 
const StoreJSON = () => {
    const [collection, setCollection] = useState(''); // this creates a hook
    const showFile = async (e) => {
        e.preventDefault()

        const reader = new FileReader()

        reader.onload = async (e) => { 
          const text = (e.target.result);
          var data = JSON.parse(text);
          console.log('Create a collection called: ' + collection, data );
          if (!data.data) {
              addCollectionandDocuments(collection, data);
          } else {
            addCollectionandDocuments(collection, data.data)
          };
        // alert(text);
        };
        // reads only the first file just in case there are more than one selected hence, item[0]
        reader.readAsText(e.target.files[0]); 
    };
        return (
            <>
            <input onChange={event=> setCollection(event.target.value)} type='text'/>
            <input type="file" onChange={(e) => showFile(e)} />
            </>
        )
}

export default StoreJSON;