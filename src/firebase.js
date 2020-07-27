import firebase from "firebase"

const firebaseApp = {
  apiKey: "AIzaSyBF0olAKwhK-YYgP2ptDN1AEhzzXIeKmpw",
  authDomain: "instagram-clone-2a6a2.firebaseapp.com",
  databaseURL: "https://instagram-clone-2a6a2.firebaseio.com",
  projectId: "instagram-clone-2a6a2",
  storageBucket: "instagram-clone-2a6a2.appspot.com",
  messagingSenderId: "294447581233",
  appId: "1:294447581233:web:8f452aad2b69715d10ad10",
  measurementId: "G-YPDW2E2H33",
}

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
