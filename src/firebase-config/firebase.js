import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyB1Hh7Q1gsgmO2VL0VR4jK2cGm7MTty6YA",
  authDomain: "misx-8c5f9.firebaseapp.com",
  projectId: "misx-8c5f9",
  storageBucket: "misx-8c5f9.firebasestorage.app",
  messagingSenderId: "789174798117",
  appId: "1:789174798117:web:9174981ade6f9912e67ccc",
  measurementId: "G-WYRV2XHL2K",
};

export const app = initializeApp(firebaseConfig);
