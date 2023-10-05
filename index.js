import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

// My Firebase Config
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

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

window.signup = function (e) {
  e.preventDefault(); // Prevent the default form submission
  let obj = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  };

  // It will create a new user and store it into firebase
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);

      // You can redirect the user to a dashboard or a confirmation page here
      window.location.href = "./login.html";
    })
    .catch((error) => {
      errorMessage.textContent = "Password Must or Should Above 6 Characters";
      errorMessage.style.display = "block";
      console.error("Error signing up:", error);
    });
};
