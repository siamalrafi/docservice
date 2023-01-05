// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB07JdzRKwnMITx1Th-onjYlfBBnm3-kgg",
  authDomain: "docservice-1932a.firebaseapp.com",
  projectId: "docservice-1932a",
  storageBucket: "docservice-1932a.appspot.com",
  messagingSenderId: "959420280758",
  appId: "1:959420280758:web:23047c6da6b9ee159a9b17"
};
console.log(process.env.REACT_APP_CLIENT_ID);//printing it to console
console.log(process.env.REACT_APP_KEY);//printing it to console


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;