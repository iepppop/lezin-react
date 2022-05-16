import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCarMKsqju0BqnBypSV2weY4jENg5Z6aAY",
  authDomain: "my-movie-3eaef.firebaseapp.com",
  projectId: "my-movie-3eaef",
  storageBucket: "my-movie-3eaef.appspot.com",
  messagingSenderId: "48224452358",
  appId: "1:48224452358:web:e012431eb4a7e8c33e6887",
  measurementId: "G-J6HPCFHN3F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);