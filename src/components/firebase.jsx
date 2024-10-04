// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDFRLZkINnzNSuiwTUlAw79EX89S1Acokw",
//   authDomain: "good-creator-4145f.firebaseapp.com",
//   projectId: "good-creator-4145f",
//   storageBucket: "good-creator-4145f.appspot.com",
//   messagingSenderId: "1086152775736",
//   appId: "1:1086152775736:web:b552bd8b26f1f9a4526ecd",
//   measurementId: "G-8Z66L5ZN0R"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBziqGc-dXOL0U7_uF9tTNxNU7uCcBwl5Q",
  authDomain: "fir-auth-f87a7.firebaseapp.com",
  databaseURL: "https://fir-auth-f87a7-default-rtdb.firebaseio.com",
  projectId: "fir-auth-f87a7",
  storageBucket: "fir-auth-f87a7.appspot.com",
  messagingSenderId: "1024149351976",
  appId: "1:1024149351976:web:2b6f7ccd9d58bcb1f28f1d",
  measurementId: "G-KN9Z5THPZF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

// Export the instances to be used in your app
export const googleProvider = provider;
export const db = getFirestore(app);
export default app;







