import firebase from 'firebase'  ; 


 const firebaseConfig = {
  apiKey: "AIzaSyBO1kiQJV3R0t15OpqQwo-HbQ7Lrw9hBX4",
  authDomain: "portfolio-8a29d.firebaseapp.com",
  databaseURL: "https://portfolio-8a29d.firebaseio.com",
  projectId: "portfolio-8a29d",
  storageBucket: "portfolio-8a29d.appspot.com",
  messagingSenderId: "261388438910",
  appId: "1:261388438910:web:30549b1f0670857f46f72f",
  measurementId: "G-ZF75FK5BZL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) ; 
const database = firebaseApp.firestore() ; 

export default database ; 
