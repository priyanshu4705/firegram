import React, { useEffect, createContext, useState } from 'react';
import app from '../firebase/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false);
        });
    }, []);

    if (pending) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return <AuthContext.Provider
        value={{ currentUser }}
    >
        {children}
    </AuthContext.Provider>
}