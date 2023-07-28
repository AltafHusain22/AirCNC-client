import React from 'react';
import Container from '../Container/Container';
import Logo from './Logo';
import Search from './Search';

const MainNav = () => {
	return (
		<div className='h-[90px] bg-white shadow-sm fixed w-full z-10'>
			<div className='py-4  '>
				<Container> 
					<div className='flex justify-between items-center gap-3 md:gap-0'>
						<Logo></Logo>
						<Search></Search>
						<div>avatar</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default MainNav;