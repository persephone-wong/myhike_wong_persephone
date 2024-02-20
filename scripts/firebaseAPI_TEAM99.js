//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBMs5I6VQk1S8i8MXICUpqUapl56_kkvTc",
    authDomain: "comp1800-202330-demo-aeffd.firebaseapp.com",
    projectId: "comp1800-202330-demo-aeffd",
    storageBucket: "comp1800-202330-demo-aeffd.appspot.com",
    messagingSenderId: "1085351692308",
    appId: "1:1085351692308:web:1b7406a1d566bb21a6bf01"  
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
