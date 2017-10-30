import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCaZdWOwt6NZmTiibd3X6HRiy9kKDWj3aU",
    authDomain: "delivery-app-2a988.firebaseapp.com",
    databaseURL: "https://delivery-app-2a988.firebaseio.com",
    projectId: "delivery-app-2a988",
    storageBucket: "delivery-app-2a988.appspot.com",
    messagingSenderId: "420912461861"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();