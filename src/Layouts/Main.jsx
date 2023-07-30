import React from 'react';
import MainNav from '../components/Shared/NavBar/MainNav';
import { Outlet } from 'react-router-dom';


const Main = () => {
	return (
		<>
			<MainNav></MainNav>
			<div className='pt-28 pb-20'>
				<Outlet></Outlet>
			 </div>
		</>
	);
};

export default Main;