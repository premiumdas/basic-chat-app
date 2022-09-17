import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBruPd6QFyMpV8Kjda8Fmms6g_YJuu0GeU",
    authDomain: "chatify-3dee6.firebaseapp.com",
    projectId: "chatify-3dee6",
    storageBucket: "chatify-3dee6.appspot.com",
    messagingSenderId: "166058413616",
    appId: "1:166058413616:web:0c0fd0278f3de5de6ae7f5"
}).auth();
