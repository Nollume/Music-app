// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  enableIndexedDbPersistence,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: "music-c128f.firebaseapp.com",
  projectId: "music-c128f",
  storageBucket: "music-c128f.appspot.com",
  messagingSenderId: "443944613653",
  appId: "1:443944613653:web:9ea477d1745b896476db1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
enableIndexedDbPersistence(db).catch((error) => {
  console.log(`Firebase presistance error ${error.code}`);
});

const usersCollection = collection(db, "users");
const songsCollection = collection(db, "songs");
const commentsCollection = collection(db, "comments");

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
