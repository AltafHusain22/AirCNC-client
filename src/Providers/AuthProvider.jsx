import React, { createContext, useState } from 'react';
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext()

import {
	createUserWithEmailAndPassword,
	getAuth,
	
  } from "firebase/auth";


const AuthProvider = ({children}) => {
	const auth = getAuth(app)
	 const [loading, setLoading] = useState(false);


	const createUser = (email , password) => { 
		return createUserWithEmailAndPassword(auth, email, password)
		loading(true)
	}

	const user = '';


	const authInfo = {
		user, 
		loading, 
		createUser
	}

	return (
		<AuthContext.Provider value={authInfo} >
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;