import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        console.log(email, password);
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const UpdateUserInfo = (data) => {
        console.log(data);
        console.log(auth.currentUser);
        setLoading(true)
        return updateProfile(auth.currentUser,data)
    }
    const logOutUser = () => {
        setLoading(true)
        localStorage.removeItem('accessToken')
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('user', currentUser);
            setLoading(false)
        })
        return () => unsubscribe();
},[])
    const authInfo = {
        createUser,
        LoginUser,
        logOutUser,
        UpdateUserInfo,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;