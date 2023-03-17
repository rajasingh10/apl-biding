// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUS7o0TyKrw2gZBxeDPPlM_-GdrwAqcSQ",
    authDomain: "apl-bidding-2e295.firebaseapp.com",
    projectId: "apl-bidding-2e295",
    storageBucket: "apl-bidding-2e295.appspot.com",
    messagingSenderId: "235099583203",
    appId: "1:235099583203:web:4ae6992e6ddb6997650bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;