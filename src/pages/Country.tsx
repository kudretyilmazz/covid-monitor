// Import react
import { useState, useEffect } from "react";

// Import axios
import axios from "axios";

// Import Contants
import { API_URL, API_TOKEN } from "./../contants/api";
// Import Components
import Card from "../components/Card";

function Country() {
	const [data, setData] =
		useState<
			Array<{ country: string; totalCases: number; totalDeaths: number; totalRecovered: number }>
		>();
	const [searchValue, setSearchValue] = useState<string>("");
	const [loading, setLoading] = useState<boolean>();

	const fetchData = async () => {
		setLoading(true);
		const response = await axios.get(`${API_URL}/countriesData`, {
			headers: {
				authorization: API_TOKEN,
			},
		});
		setData(response.data.result);

		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="">
			<div>
				<input
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					className=" text-center block p-2 w-full rounded text-sm text-gray-900 my-3 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search country..."
				/>
			</div>
			<div className="grid md:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
				{loading
					? "Loading..."
					: data
							?.filter(item => item.country.toLowerCase().includes(searchValue.toLowerCase()))
							.map(item => {
								return (
									<Card
										key={item.country}
										country={item.country}
										totalCase={item.totalCases}
										totalDeaths={item.totalDeaths}
										totalRecovered={item.totalRecovered}
									/>
								);
							})}
			</div>
		</div>
	);
}

export default Country;
