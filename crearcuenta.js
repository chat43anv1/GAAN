import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

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

registro.addEventListener('click', (e) => {
  var email = document.getElementById('emailreg').value;
  var password = document.getElementById('passwordreg').value;

  createUserWithEmailAndPassword(auth, email, password).then(cred =>{
    alert("Usuario Creado");
    auth.signOut(); 
    sendEmailVerification(auth.currentUser).then(() =>{
      alert('Se ha enviado un correo de verificación');
    });
  }).catch(error => {
    const errorCode = error.code;

    if (errorCode == 'auth/email-already-in-use') 
      alert('El correo ya está en uso');
    else if(errorCode == 'auth/invalid-email')
      alert('El correo no es válido');
    else if(errorCode == 'auth/weak-password')
      alert('La contraseña debe tener al menos 6 caracteres');
  });
});
