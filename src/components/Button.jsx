import React from "react";

const Button = ({
	icon,
	customFunction,
	backgroundColor,
	bgHoverColor,
	color,
	text,
	size,
	borderRadius,
	width,
}) => {
	return (
		<button
			type='button'
			onClick={customFunction}
			className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
			style={{backgroundColor, color, borderRadius}}>
			{icon} {text}
		</button>
	);
};

export default Button;
