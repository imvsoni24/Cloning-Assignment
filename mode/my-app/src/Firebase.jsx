import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAI-1q1VsyLZftTUjb_0k-hOigF7QK5th0",
  authDomain: "becharmed-5b651.firebaseapp.com",
  projectId: "becharmed-5b651",
  storageBucket: "becharmed-5b651.appspot.com",
  messagingSenderId: "704384082453",
  appId: "1:704384082453:web:39146f292587820b1ea41c",
  measurementId: "G-ELRV6CD1WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}