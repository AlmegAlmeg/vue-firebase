import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyAF_AwY1laXioyaeyGnueVNdvcr8-nN9Ew",
	authDomain: "auth-test-2f6dc.firebaseapp.com",
	projectId: "auth-test-2f6dc",
	storageBucket: "auth-test-2f6dc.appspot.com",
	messagingSenderId: "108036386778",
	appId: "1:108036386778:web:eb86faed01163d3ea65ae3",
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
