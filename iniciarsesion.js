import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js'; // Agregar signInWithEmailAndPassword aquí

const firebaseConfig = {
  apiKey: "AIzaSyAxqbZo2qiNH4RdT0viNayBM7dFJxC8NA8",
  authDomain: "gaannusa.firebaseapp.com",
  projectId: "gaannusa",
  storageBucket: "gaannusa.appspot.com",
  messagingSenderId: "489251140923",
  appId: "1:489251140923:web:c81cda92d1515ede9bb31e",
  measurementId: "G-JFHBGXRMD8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

login.addEventListener('click', (e) => {
  var email = document.getElementById('emaillog').value;
  var password = document.getElementById('passwordlog').value;

  signInWithEmailAndPassword(auth, email, password).then(cred => {
    alert("Usuario Logueado");
    console.log(cred.user);
  }).catch(error => {
    const errorCode = error.code;

    if(errorCode == 'auth/invalid-email')
      alert('El correo no es válido');
    else if(errorCode == 'auth/user-disabled')
      alert('El usuario ha sido deshabilitado');
    else if(errorCode == 'auth/user-not-found')
      alert('El usuario no existe');
    else if(errorCode == 'auth/wrong-password')
      alert('Contraseña incorrecta');
  });
});

/*auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Usuario Activo");
    var email = user.emailVerified;
    if (email) {
      window.location.href = "unavezregistrado.html";
    } else {
      auth.signOut();
    }
  } else {
    console.log("Usuario Inactivo");
  }
});*/

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Usuario Activo");
    var email = user.email;
    if (email === "gaan1920@gmail.com") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "unavezregistrado.html";
    }
  } else {
    console.log("Usuario Inactivo");
  }
});


