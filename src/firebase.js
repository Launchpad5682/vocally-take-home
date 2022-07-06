import { firebaseConfig } from "./config/firebase-config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export {  firestoreDB };
