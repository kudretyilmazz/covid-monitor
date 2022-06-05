// Import react
import { useState, useEffect } from "react";

// Import api
import { API_TOKEN, API_URL } from "../contants/api";

// Import axios
import axios from "axios";

export default function TotalData() {
	const [loading, setLoading] = useState<boolean>();
	const [datas, setData] = useState<{
		totalCases: string;
		totalDeaths: string;
		totalRecovered: string;
	}>();
	const fetchData = async () => {
		setLoading(true);
		const response = await axios.get(`${API_URL}/totalData`, {
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
			{loading ? (
				<h1 className="text-6xl text-gray-900 mb-4"> Loading...</h1>
			) : (
				<div className="flex flex-col text-center">
					<span className="inline-block py-2 bg-gray-100 my-3 text-gray-800 text-2xl font-medium mr-2 px-2.5  rounded dark:bg-gray-700 dark:text-gray-300">
						Total Case: {datas?.totalCases}
					</span>
					<span className="inline-block py-2  bg-red-100 my-3 text-red-800 text-2xl font-medium mr-2 px-2.5  rounded dark:bg-red-200 dark:text-red-900">
						Total Deaths: {datas?.totalDeaths}
					</span>
					<span className="inline-block py-2 bg-green-100 my-3 text-green-800 text-2xl font-medium mr-2 px-2.5  rounded dark:bg-green-200 dark:text-green-900">
						Total Recovered: {datas?.totalRecovered}
					</span>
				</div>
			)}
		</div>
	);
}
