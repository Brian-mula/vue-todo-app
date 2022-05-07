import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_GDPixoz8dWWCe2aiU4WFzdDudblPpXc",

  authDomain: "vue-todos-7a312.firebaseapp.com",

  projectId: "vue-todos-7a312",

  storageBucket: "vue-todos-7a312.appspot.com",

  messagingSenderId: "240686311191",

  appId: "1:240686311191:web:35d8a530d736857a7ff952",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {auth};
