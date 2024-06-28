// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { listaProductos } from '../data/datos'
import { addDoc, collection, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvnSxBdO1nIef2DRcgQfUTa1P6K7ip92Q",
  authDomain: "tiendaonline-77694.firebaseapp.com",
  projectId: "tiendaonline-77694",
  storageBucket: "tiendaonline-77694.appspot.com",
  messagingSenderId: "930399165922",
  appId: "1:930399165922:web:a600bf2530a7de42de6dbb"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Conectado a FireBase.")

export const db = getFirestore(app);

/*

Solo descomentar para insertar los productos del archivo .js en firebase
listaProductos.forEach((prod) => {
    addDoc(collection(db, "listaProductos"), prod)
    .then((elem) => console.log(`se agrego el producto id ${elem.id}`))
    .catch((error) => console.log(error));
});


*/