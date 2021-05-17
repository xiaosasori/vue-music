import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBaE8jG_MIiKyRedGVeuuLPZnEcH9Dsvjg',
  authDomain: 'vue-music-aa448.firebaseapp.com',
  projectId: 'vue-music-aa448',
  storageBucket: 'vue-music-aa448.appspot.com',
  // this prop is for push notification, so we don't need this
  // messagingSenderId: '996856955394'
  appId: '1:996856955394:web:c97bc4eaf8c3e2fae4dd1b',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
}
