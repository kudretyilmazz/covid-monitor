// Import React
import { useEffect, useState } from "react";

// Import Api
import { API_URL, API_TOKEN } from "./../contants/api";

// Import axios
import axios from "axios";

interface columnsinterface {
	title: string;
	value: string;
}

function Continent() {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<any[]>();
	const columns: columnsinterface[] = [
		{
			title: "Continent",
			value: "continent",
		},
		{
			title: "Active Cases",
			value: "activeCases",
		},
		{
			title: "New Cases",
			value: "newCases",
		},
		{
			title: "Total Cases",
			value: "totalCases",
		},
		{
			title: "Total Deaths",
			value: "totalDeaths",
		},
		{
			title: "New Deaths",
			value: "newDeaths",
		},
		{
			title: "Total Recovered",
			value: "totalRecovered",
		},
	];

	const fetchData = async () => {
		setLoading(true);
		const response = await axios.get(`${API_URL}/continentData`, {
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
			<h1 className="text-2xl mb-4 font-bold text-gray-500">Corona Table</h1>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				{loading ? (
					"Loading..."
				) : (
					<table className="w-full text-sm text-left text-gray-400 bg-gray-800 ">
						<thead className="text-xs text-gray-200 uppercase bg-gray-70 ">
							<tr>
								{columns.map(item => {
									return (
										<th key={item.title} className="py-3 px-6">
											{item.title}
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{data?.map(item => {
								return (
									<tr
										key={item.continent}
										className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
									>
										{columns.map(subitem => {
											return (
												<td
													key={subitem.value}
													className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
												>
													{item[subitem.value]}
												</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}

export default Continent;
