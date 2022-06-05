import React from 'react';

const coverImage =
	'https://assets.contenthub.wolterskluwer.com/api/public/content/943905f93e58411d84eba00cf8ba718a';

export interface CardProps {
	country: string;
	totalCase: number;
	totalDeaths: number;
	totalRecovered: number;
}

function Card(props: CardProps) {
	const { country, totalCase, totalDeaths, totalRecovered } = props;
	return (
		<div className=' m-2 rounded overflow-hidden shadow-md hover:shadow-lg hover:scale-105 hover:transition'>
			<img src={coverImage} alt='country' className='w-full' />
			<div className='px-6 py-4 '>
				<div className='font-bold text-xl mb-2'> {country} </div>
				<p className='text-gray-700 text-base '> Total Deaths: {totalDeaths} </p>
				<p className='text-gray-700 text-base '> Total Case: {totalCase}</p>
				<div className='pt-6 pb-2'>
					<span className='inline-block bg-green-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2'>
						#Recovered: {totalRecovered}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
