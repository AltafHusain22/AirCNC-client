import React from 'react';
import Container from '../Container/Container';
import Logo from './Logo';

const MainNav = () => {
	return (
		<div className='h-[60px] bg-white shadow-sm fixed w-full z-10'>
			<div className='py-4  '>
				<Container> 
					<div className='flex justify-between items-center gap-3 md:gap-0'>
						<Logo></Logo>
						<div>Menu</div>
						<div>avatar</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default MainNav;