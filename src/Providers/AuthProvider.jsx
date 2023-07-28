import React, { Children, createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = () => {



	const authInfo = {
		user, 
		loading , 
	}

	return (
		<AuthContext.Provider value={authInfo} >
			{ Children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;