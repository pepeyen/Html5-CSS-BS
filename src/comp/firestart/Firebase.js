//import firestore from './firebase/firestore'
const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
    /*Insert the firebase config provided by google here*/
};

firebase.initializeApp(firebaseConfig);

export default firebase;