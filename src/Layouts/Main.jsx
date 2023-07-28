import React from 'react';
import MainNav from '../components/Shared/NavBar/MainNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
	return (
		<>
			<MainNav></MainNav>
			<Outlet></Outlet>
		</>
	);
};

export default Main;