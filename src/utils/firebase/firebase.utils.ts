import firebaseConfig from "../../firebase_env.config.json";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, DocumentReference, DocumentData } from "firebase/firestore";
import { AddtionalInformation } from "../../types/AdditionalInformation.types";

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const createUserProfileDocument = async (userAuth: User, additionalData = {} as AddtionalInformation) => {
    if(!userAuth) return;

    console.log(userAuth)
}

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User): Promise<void | DocumentReference<DocumentData, DocumentData>> => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(err){
            console.error("error creating the user", err);
        }
    }

    return userDocRef;
}