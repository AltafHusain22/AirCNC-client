import React from 'react';
import MainNav from '../components/Shared/NavBar/MainNav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';


const Main = () => {
	return (
		<>
			<MainNav></MainNav>
			  <div className='pt-28 pb-20 vh-100'>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Main;