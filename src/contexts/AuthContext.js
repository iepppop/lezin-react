import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../utils/init-firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChange,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider
} from 'firebase/auth';

const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
    signInWithGoogle: () => Promise,
    signInWithFacebook: () => Promise,
})

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        signOut(auth);
    }
    const signInWithGoogle = (email, password) => {
        const provider =  new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const signInWithFacebook = (email, password) => {
        const provider =  new FacebookAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const value = {
        currentUser,
        register,
        login,
        logout,
        signInWithGoogle,
        signInWithFacebook
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}