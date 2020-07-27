import firebase from "firebase"
import { firebaseKeys } from "./firebaseKeys"

const firebaseApp = firebase.initializeApp(firebaseKeys)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
