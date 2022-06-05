// Import logo
import Logo from "./_partials/Logo";
import { useState } from "react";
// Import contants
import { menuItems } from "./_partials/menuItems";

// Import router
import { NavLink } from "react-router-dom";

function Header() {
	const [mobil, setMobil] = useState<boolean>(false);
	return (
		<>
			<nav className="bg-white shadow-lg">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-7 ">
							<div>
								<a href="/" className="flex items-center py-4 px-2">
									<img
										src="https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_1280.png"
										alt="Logo"
										className="h-8 w-8 mr-2"
									/>
									<span className="font-semibold text-gray-500 text-lg">Corona Monitor</span>
								</a>
							</div>
						</div>
						<div className="hidden md:flex flex-row items-center space-x-1">
							<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
								{menuItems.map(items => (
									<li key={items.id}>
										<NavLink
											className={({ isActive }) =>
												isActive
													? "py-4 px-2 text-red-500 font-semibold hover:text-red- transition duration-500"
													: "py-4 px-2 text-gray-500 font-semibold hover:text-red-500 transition duration-500"
											}
											to={items.url}
										>
											{items.title}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<div className="md:hidden flex items-center">
							<button className="outline-none mobile-menu-button" onClick={() => setMobil(!mobil)}>
								<svg
									className=" w-6 h-6 text-gray-500 hover:text-red-500 "
									x-show="!showMenu"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className={`${mobil ? "" : "hidden"} mobile-menu`}>
					<ul className="">
						{menuItems.map(items => (
							<li key={items.id}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "block px-7 font-medium text-sm text-red-500 px-2 py-4 hover:bg-gray-500 hover:text-red transition duration-300"
											: "block px-7 font-medium text-sm px-2 py-4 hover:bg-gray-500 hover:text-white transition duration-3000"
									}
									to={items.url}
								>
									{items.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Header;
