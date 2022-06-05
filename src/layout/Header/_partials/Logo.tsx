import React from "react";

interface LogoProps {
	title?: string;
	logo?: string;
	onclick?: () => void;
}

function Logo(props: LogoProps) {
	const { title, logo } = props;
	return (
		<div className="flex items-center">
			<img alt={title} src={logo} className="mr-3 h-6 " />
			<span className="self-center text-xl font-semibold whitespace-nowrap text-white">
				{title}
			</span>
		</div>
	);
}

export default Logo;

Logo.defaultProps = {
	title: "Corona Monitor",
	logo: "https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_1280.png",
};
