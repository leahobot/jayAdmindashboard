import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className='mt-20'>
			<p className='dark:text-gray-200 text-gray-700 text-center m-10'>
				ALL RIGHT RESERVERD, JAY'S ADMIN © {currentYear}
			</p>
		</div>
	);
};

export default Footer;
