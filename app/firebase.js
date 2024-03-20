
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-B3dzyZ_BggX__xewGytwVRIenXt7sgk",
  authDomain: "nextjs-auth-project-dcaff.firebaseapp.com",
  projectId: "nextjs-auth-project-dcaff",
  storageBucket: "nextjs-auth-project-dcaff.appspot.com",
  messagingSenderId: "865037931854",
  appId: "1:865037931854:web:8673a88c12d3ba96d73a1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
