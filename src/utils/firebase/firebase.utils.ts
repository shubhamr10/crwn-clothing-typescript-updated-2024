import firebaseConfig from "../../firebase_env.config.json";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
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