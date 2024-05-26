import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBSWLno7egNxAAyspwiLMRGaxLcr219odo",
  authDomain: "mas-liquid.firebaseapp.com",
  projectId: "mas-liquid",
  storageBucket: "mas-liquid.appspot.com",
  messagingSenderId: "144667950350",
  appId: "1:144667950350:web:85fe64d35b87f54b4e6b5f",
  measurementId: "G-RNH89Y58XZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, auth};