import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBPdSGllpnLXLgdgrBwcyR0N6xRdY_p9u8",
    authDomain: "freetube-78a4a.firebaseapp.com",
    projectId: "freetube-78a4a",
    storageBucket: "freetube-78a4a.appspot.com",
    messagingSenderId: "951658426225",
    appId: "1:951658426225:web:88cb5ca9de23c24f4810d0",
    measurementId: "G-R904QP6RMC"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const firestore = firebase.firestore()
export const storage = firebase.storage()