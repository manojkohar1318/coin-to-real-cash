  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAkWyk3q-zaDHkjDs90Bm2ih_qw-O_ZJQU",
    authDomain: "coin-to-real-cash.firebaseapp.com",
    databaseURL: "https://coin-to-real-cash-default-rtdb.firebaseio.com",
    projectId: "coin-to-real-cash",
    storageBucket: "coin-to-real-cash.firebasestorage.app",
    messagingSenderId: "265929655267",
    appId: "1:265929655267:web:7eb846fe7bd104761a56d6"
  };

  // initialize firebase configuration
  
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

document.getElementById("registration-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var email = getElementVal("email");
  var password = getElementVal("password");

  // 🔐 Create user with Firebase Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // ✅ Save only username & email to Database (not password)
      db.ref("users/" + user.uid).set({
        username: username,
        email: email
      });

      alert("Account created successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
