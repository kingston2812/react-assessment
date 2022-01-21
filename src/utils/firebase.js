import firebase,{ initializeApp } from 'firebase/compat/app'
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/database"


const firebaseConfig = {
  apiKey: "AIzaSyAbHVDia5QAm4-pTr30_aQA627iBPCqY70",
  authDomain: "firebade-crud-24742.firebaseapp.com",
  projectId: "firebade-crud-24742",
  storageBucket: "firebade-crud-24742.appspot.com",
  messagingSenderId: "414701575119",
  appId: "1:414701575119:web:e74b11ac564c70d23390ba",
  measurementId: "G-PJYMVVS327"
};

firebase.initializeApp(firebaseConfig);



export default firebase;