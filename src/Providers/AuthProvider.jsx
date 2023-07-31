import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext()

import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
	
  } from "firebase/auth";


const AuthProvider = ({children}) => {
	const auth = getAuth(app)
	const provider = new GoogleAuthProvider()
	const [loading, setLoading] = useState(true);
	const [ user, setUser] = useState(null)
	


	// create user 
	const createUser = (email , password) => { 
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password)
	}

	// sign In 
	const signIn = (email , password ) => { 
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password)
	}


	//google signIn
	const googleSignIn = () => { 
		setLoading(true);
		return signInWithPopup(auth, provider)
	}


	// update user profile 
	const updateUserProfileInfo = (displayName , photoURL) => { 
		return updateProfile(auth.currentUser ,{
			displayName: displayName,
			photoURL: photoURL
		})
	}

	// logOut
	const logOut = () => { 
		setLoading(true);
		return signOut(auth)
	}

	//password Reset

	const passwordReset = (email) => { 
		return sendPasswordResetEmail(auth, email)
	}

	// user monitoring
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
		  setUser(loggedUser);
		  setLoading(false);
		});
		return () => {
		  unsubscribe();
		};
	  }, []);


	const authInfo = {
		user, 
		loading, 
		setLoading,
		createUser,
		signIn,
		googleSignIn,
		logOut,
		passwordReset,
		updateUserProfileInfo

	}

	return (
		<AuthContext.Provider value={authInfo} >
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;