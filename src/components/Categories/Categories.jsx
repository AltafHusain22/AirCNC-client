import React from 'react';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
	console.log(categories)
	return (
		<div className='flex flex-row items-center justify-between overflow-x-auto pt-4'>
			{
			
				categories.map(category => <>
				
					<CategoryBox label={ category.label } icon={category.icon} key={category.label}></CategoryBox>
				</>)
			
			}
		</div>
	);
};

export default Categories;