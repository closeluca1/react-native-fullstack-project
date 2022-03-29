import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "",
  projectId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);

export const authentication = getAuth(app);