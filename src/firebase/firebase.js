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

database.ref().set({
  name: 'Jarod',
  age: 40,
});

// database.ref().set('This is my data');
database.ref('age').set(41);
