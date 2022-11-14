import { initializeApp } from "firebase/app";
import {firebaseConfig} from  "./firebase-config"
import {getAuth, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    sendEmailVerification,
    sendPasswordResetEmail,
} from "firebase/auth"
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore"

const app = initializeApp(firebaseConfig);
export const auth=getAuth();

export const firestore=getFirestore(app)

export const createUserProfile= async userAuthenticated=>{
    const userReference = doc(firestore, `users/${userAuthenticated.uid}`);
    const snapshot= await getDoc(userReference);
    if(!snapshot.exists()){
        const {name,email,photoURL}= userAuthenticated;
        try{
            await setDoc(userReference, {
                name,
                email,
                photoURL,
                createdAt: new Date()
            });
        }catch (error){
            // console.log({error})
        }

    };
    return snapshot;
};

export const createUser= async (email, password)=>{
    const credentials= await createUserWithEmailAndPassword(
        auth,
        email,
        password );
    console.log(credentials)
    await sendEmailVerification(credentials.user, {
        url:"http://localhost:3000"
    });
    localStorage.setItem("username", credentials.user);
    
    return credentials;
};

export const singIn= async(email, password)=> await signInWithEmailAndPassword(auth, email,password);
;

export const resetPassword= async email=>{
    await sendPasswordResetEmail(auth, email, {
        url:"http://localhost:3000/Login"

    })
};

const providerGoogle= new GoogleAuthProvider();

export const singInGoogle=()=>{
    return signInWithPopup(auth ,providerGoogle)
};