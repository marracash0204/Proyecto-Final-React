import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqNzJFqUV1pOP4Kb68zSlDNTZSh2COOvE",
  authDomain: "orion-cosmetics.firebaseapp.com",
  projectId: "orion-cosmetics",
  storageBucket: "orion-cosmetics.appspot.com",
  messagingSenderId: "260387978712",
  appId: "1:260387978712:web:6f45a412ae167a8798c6ad",
  measurementId: "G-8PNLYV5VH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getfirestore(app);

