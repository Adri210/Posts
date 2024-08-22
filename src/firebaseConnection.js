import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA38gY0AeQbnrsfioMBCgxOquwoj3Q8ejU",
    authDomain: "bancodedadosb-bcdc1.firebaseapp.com",
    projectId: "bancodedadosb-bcdc1",
    storageBucket: "bancodedadosb-bcdc1.appspot.com",
    messagingSenderId: "1031023003535",
    appId: "1:1031023003535:web:5b2460cb0754812d79edfa"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth};