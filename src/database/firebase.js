
import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyBozgIzgHllTyyODrEeZwR6NwKTcXqJfLw",
    authDomain: "uc-programacao-19450.firebaseapp.com",
    projectId: "uc-programacao-19450",
    storageBucket: "uc-programacao-19450.appspot.com",
    messagingSenderId: "318681978323",
    appId: "1:318681978323:web:de13add330e553d4354b26",
    measurementId: "G-93HD9VCZ8E"
}

const firebaseApp = firebase.initializeApp(config)

export const db = firebaseApp.firestore();
