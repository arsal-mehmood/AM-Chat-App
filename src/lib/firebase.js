import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyDxdqAmglAGP1FAB3BVlmMwYBuYqogrcq8",
  authDomain: "reactchat-e906e.firebaseapp.com",
  projectId: "reactchat-e906e",
  storageBucket: "reactchat-e906e.appspot.com",
  messagingSenderId: "692499537162",
  appId: "1:692499537162:web:c84b2bd17f51f43a06aef3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()