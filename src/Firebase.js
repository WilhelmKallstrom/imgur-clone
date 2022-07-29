import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDxUymZNCteNrq-v9LrryXdRhW7XB7Xcg",
    authDomain: "imgur-clone-3eab6.firebaseapp.com",
    projectId: "imgur-clone-3eab6",
    storageBucket: "imgur-clone-3eab6.appspot.com",
    messagingSenderId: "690560241791",
    appId: "1:690560241791:web:01d6606b81d9dd8aaeef4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage  = getStorage(app);