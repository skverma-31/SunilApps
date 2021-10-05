import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'apikey',
  authDomain: 'authdomain',
  projectId: 'projectid',
  storageBucket: 'storagebucket',
  messagingSenderId: 'msgsenderid',
  appId: 'appid',
  measurementId: 'measurementid',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
