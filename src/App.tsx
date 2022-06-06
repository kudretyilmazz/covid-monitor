import Header from "./layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
import TotalData from "./pages/TotalData";
import Continent from "./pages/Continent";
import News from "./pages/News";
function App() {
	return (
		<div>
			<Header />
			<div className="md:container px-20 py-10 md:mx-auto page-content">
				<Routes>
					<Route path="/" element={<Country />} />
					<Route path="/totaldata" element={<TotalData />} />
					<Route path="/continent" element={<Continent />} />
					<Route path="/news" element={<News />} />
					<Route path="*" element={<div>404 Not Found</div>} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
