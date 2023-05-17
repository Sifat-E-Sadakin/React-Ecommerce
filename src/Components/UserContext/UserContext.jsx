import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useNavigate } from 'react-router-dom';

export let userInfo = createContext(null)



const UserContext = ({children}) => {

    const auth = getAuth(app);

    let googleProvider = new GoogleAuthProvider(app);

   





    let [loading, setLoading] = useState(true);

    let [user, setUser] = useState([]);

    let googleSingUp=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    let createAccount = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let getInto = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email , password)
    }

    let logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        let unsubscribe = onAuthStateChanged( auth, newUser=>{
            console.log('from auth',newUser);
            setUser(newUser);
           
            
            setLoading(false);
           
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    let verifyEmail = (verifyUser)=>{
        return sendEmailVerification(verifyUser)
    }

    let resetPassword= (email)=>{
        return sendPasswordResetEmail(auth, email)
    }





    let info = {
        user,
        createAccount,
        getInto,
        logOut,
        loading,
        googleSingUp,
        verifyEmail,
        resetPassword
    }
    
    return (
        <userInfo.Provider value={info}>
            {children}
       </userInfo.Provider>
    );
};

export default UserContext;