import React, { useContext, useEffect, useState } from 'react';
import { auth, provider} from '../firebase'



const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


// auth provider to wrap app with state
export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


 


    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const signupWithGoogle = async () => {
        auth.signInWithRedirect(provider);
        

    }


    const logout = () => {
        return auth.signOut()
    }

   useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        signupWithGoogle,
        logout
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

