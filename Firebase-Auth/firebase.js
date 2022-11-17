// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn6P4c_ElNtc-BF4ul4flexKhIvdrFK3w",
  authDomain: "fir-auth-63e58.firebaseapp.com",
  projectId: "fir-auth-63e58",
  storageBucket: "fir-auth-63e58.appspot.com",
  messagingSenderId: "1046367526425",
  appId: "1:1046367526425:web:f49da13cced587ebda9488",
};

// Initialize Firebase
console.log(firebase);
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
