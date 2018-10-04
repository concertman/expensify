import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCquobhUJ-iXgZ5iqGrH-0JZDZWllwRTbQ',
  authDomain: 'expensify-77902.firebaseapp.com',
  databaseURL: 'https://expensify-77902.firebaseio.com',
  projectId: 'expensify-77902',
  storageBucket: 'expensify-77902.appspot.com',
  messagingSenderId: '497393526658',
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
