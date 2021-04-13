import React, { useContext, useEffect, useState } from 'react';
import auth from '../firebase/auth'
const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const value = {
        currentUser,
        signup
    }

    const signup = (username, email, password) => {
        return auth.createUserWithEmailAndPassword(username, email, password)

    }
    useEffect(() => {
       const unsubscribe= auth.onAuthStateChanged = (user) => {
            setCurrentUser(user)
        }

        return unsubscribe;
    }, [])




    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

