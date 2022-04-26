// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBaBPJYEEWJjDedX1vUDRv6MUfYPtsHfcs',
  authDomain: 'netflixx-49254.firebaseapp.com',
  projectId: 'netflixx-49254',
  storageBucket: 'netflixx-49254.appspot.com',
  messagingSenderId: '131259408251',
  appId: '1:131259408251:web:49697dbd8f13dd5d7a67de',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
