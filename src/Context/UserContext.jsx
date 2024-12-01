import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { auth } from './../firebase/firebase';

export const AuthContext = createContext(null)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null)

const googleProvider = new GoogleAuthProvider()
const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
}

const handelLogout = () => {
    return signOut(auth)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
    })
    return () => unsubscribe() 
}, [])

const obj = {
    loginWithGoogle,
    user,
    setUser,
    handelLogout
}
    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;