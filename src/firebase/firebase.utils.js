import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyDEUaZawJglnwZD39TNpibg8phyLFhVKuw",
    authDomain: "crown-collection.firebaseapp.com",
    projectId: "crown-collection",
    storageBucket: "crown-collection.appspot.com",
    messagingSenderId: "1020533624403",
    appId: "1:1020533624403:web:8d47db73211cc4f3c0c0a6",
    measurementId: "G-3FW301XYMK"
}

  

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    console.log(snapShot)

    if(!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase