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
		loading(true);
		return signInWithPopup(auth, provider)
	}

	// logOut
	const logOut = () => { 
		setLoading(true);
		signOut(auth)
	}

	//password Reset

	const passwordReset = (email) => { 
		sendPasswordResetEmail(auth, email)
	}

	// user monitoring
	useEffect(() => { 
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => { 
			if (currentUser) { 
				setUser(currentUser)
			}
			setLoading(false)
		})

		return unsubscribe()


	}, [])


	const authInfo = {
		user, 
		loading, 
		createUser,
		signIn,
		googleSignIn,
		logOut,
		passwordReset

	}

	return (
		<AuthContext.Provider value={authInfo} >
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;