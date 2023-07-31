import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const GoogleLogin = () => {

	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || '/'
	
	const {
		
	  setLoading,
	  googleSignIn,
	  
  
	} = useContext(AuthContext)

	  // handle google login 
	  const handleGoogleLogin = () => { 
		googleSignIn()
		  .then(result => { 
		   toast.success('huury! Login success!!')
			setLoading(false)
			navigate(from, {replace: true})
		  })
		  .catch((error) => { 
			console.log(error.message)
		  })
	  }
	
	return (
		<div onClick={handleGoogleLogin} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
		<FcGoogle size={32} />

		<p>Continue with Google</p>
	  </div>
	);
};

export default GoogleLogin;