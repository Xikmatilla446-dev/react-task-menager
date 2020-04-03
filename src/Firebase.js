import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {

    apiKey: "AIzaSyDSRK8d1_LeXqJxBSCVvNlusf2VjTjfA5I",
    authDomain: "http-app-c6bfd.firebaseapp.com",
    databaseURL: "https://http-app-c6bfd.firebaseio.com",
    projectId: "http-app-c6bfd",
    storageBucket: "http-app-c6bfd.appspot.com",
    messagingSenderId: "413478914946",
    appId: "1:413478914946:web:3db48de017f312077cdd9b",
    measurementId: "G-898JSG53QN"
    // appId: "1:413478914946:web:3db48de017f312077cdd9b",
    // measurementId: "G-898JSG53QN"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
