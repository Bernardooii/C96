import firebase from "firebase/app"
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDIj5VQYuBu-lsXjrJPyrSMXnZz8gfT-ik",
    authDomain: "vencimento-4792e.firebaseapp.com",
    projectId: "vencimento-4792e",
    storageBucket: "vencimento-4792e.appspot.com",
    messagingSenderId: "623873508217",
    appId: "1:623873508217:web:e745cf002d5069962065a8"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore