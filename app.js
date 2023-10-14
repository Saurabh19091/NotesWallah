// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"; // Import from firebase-auth module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnIK30G41-NNmyjeHqUvU8hamg4b0t984",
    authDomain: "signup-page-71274.firebaseapp.com",
    projectId: "signup-page-71274",
    storageBucket: "signup-page-71274.appspot.com",
    messagingSenderId: "355401902280",
    appId: "1:355401902280:web:3fbea00e0b1b37e96d9dfd",
    measurementId: "G-8HHJKMNZ05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Getting All the object of html
var fullname = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")



// making an function for storing data
window.signup = function(e) {
    e.preventDefault();

    var obj = {
        fullname: fullname.value,
        email: email.value,
        password: password.value,
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function(userCredential) {
            // Signup Successful
            const user = userCredential.user;

            // Send email verification
            sendEmailVerification(user)
                .then(function() {
                    alert("Signup Successful. Verification email sent.");
                })
                .catch(function(error) {
                    alert("Error sending verification email: " + error.message);
                });
        })
        .catch(function(error) {
            alert("Error signing up: " + error.message);
        });

    console.log(obj);
};