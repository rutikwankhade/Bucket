import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_API_ID
})

// for signin with google
export const provider = new firebase.auth.GoogleAuthProvider();


// gives authentication instance
export const auth = app.auth()

// database
export const firestore = app.firestore()
export default app;
