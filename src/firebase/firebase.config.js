
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLChql-uLdh3xATaxwlpg5P-Pe_AvwcWo",
  authDomain: "trisog-7a59d.firebaseapp.com",
  projectId: "trisog-7a59d",
  storageBucket: "trisog-7a59d.appspot.com",
  messagingSenderId: "344380760350",
  appId: "1:344380760350:web:1aa60a10d8b5abdefb290f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;