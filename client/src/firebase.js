// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBASE_API_KEY,
  authDomain: import.meta.env.VITE_FBASE_AUTH_DOMAIN,
  projectId: "mern-estate-3b535",
  storageBucket: import.meta.env.VITE_FBASE_STORAGE_BUCKET,
  messagingSenderId: "620387644109",
  appId: import.meta.env.VITE_FBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);