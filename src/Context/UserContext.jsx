import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {

    // const [dark, setDark] = useState(false);

    // const handleDark = () => {
    //     setDark(!dark);
    //     localStorage.setItem('dark-mode', !dark)
    // };

    // useEffect(() => {
    //     if (!dark) {
    //         document.querySelector('html').setAttribute('dark-them', 'dark')
    //     } else {
    //         document.querySelector('html'.setAttribute('dark-theme', ''))
    //     }
    // }, [dark]);

    // useEffect(() => {
    //     const localDark = JSON.parse(localStorage.getItem('dark-mode'));
    //     console.log(localDark);
    //     setDark(localDark)
    // }, []);





    const googelProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const nameUpdate = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name });
    }
    const varifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    // google sign in 
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googelProvider)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //reset password
    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email);
    }

    //sign out
    const logOut = () => {
        return signOut(auth);
    };


    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscibe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        nameUpdate,
        varifyEmail,
        googleSignIn,
        signIn,
        logOut,
        resetPassword,
        // handleDark
    };




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;