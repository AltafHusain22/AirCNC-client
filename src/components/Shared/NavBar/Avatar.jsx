import { useContext } from 'react';
import avatar from '../../../../src/assets/R.png'
import { AuthContext } from '../../../Providers/AuthProvider';

const Avatar = () => {
	const {user} = useContext(AuthContext)
	return (
		<>
			
		<img className='rounded-full' src={user && user.photoURL ? user.photoURL : avatar} alt="" width='40' height='40'/>
		</>
	);
};

export default Avatar;