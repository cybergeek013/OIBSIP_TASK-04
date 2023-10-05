import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

// My Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv2FgLr28w7li5Pgg71_ZfeAhV46v8iIY",
  authDomain: "user-authentication-app-28544.firebaseapp.com",
  projectId: "user-authentication-app-28544",
  storageBucket: "user-authentication-app-28544.appspot.com",
  messagingSenderId: "700526601022",
  appId: "1:700526601022:web:085d9cfcbe1f49bd2b026f",
  measurementId: "G-G34RGZHD6Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const errorMessage = document.getElementById("error-message");

window.signin = function (event) {
  event.preventDefault(); // Prevent the default form submission

  const email = loginEmail.value;
  const password = loginPassword.value;

  // Sign in the user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);

      // Redirect the user to the secure page
      window.location.href = "./secure.html";
    })
    .catch((error) => {
      // Handle login errors
      errorMessage.textContent = "Invalid email or password.";
      errorMessage.style.display = "block";
      console.error("Error signing in:", error);
    });
};
