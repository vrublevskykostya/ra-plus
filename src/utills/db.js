import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Get a Firestore instance

const fb = firebase.initializeApp({
  projectId: 'ra-plus',
  apiKey: 'AIzaSyAiCXlHdhrU8oZ3Vv-u9kQdhvBAhI8znPU',
  storageBucket: 'gs://ra-plus.appspot.com',
});

export const db = fb.firestore();
export const auth = fb.auth();
// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true });
