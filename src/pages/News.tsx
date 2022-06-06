// Import react
import { useState, useEffect } from "react";

// Import api
import { API_TOKEN, API_URL } from "../contants/api";

// Import axios
import axios from "axios";

function News() {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<
		Array<{
			date: string;
			description: string;
			image: string;
			name: string;
			source: string;
			url: string;
		}>
	>();
	const fetchData = async () => {
		setLoading(true);
		const response = await axios.get(`${API_URL}/coronaNews`, {
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
	console.log(data);
	return (
		<div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
			{loading
				? "Loading..."
				: data?.map(item => {
						return (
							<div
								id="card"
								className="flex flex-row items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 "
							>
								<a href={item.url} className="">
									<img
										className="object-cover w-full h-96 rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
										src={item.image}
										alt={item.name}
									/>
									<div className="flex flex-col justify-between p-4 leading-normal">
										<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
											{item.name}
										</h5>
										<p className="mb-3 font-normal text-gray-700 ">{item.description}</p>
									</div>
								</a>
							</div>
						);
				  })}
		</div>
	);
}

export default News;
