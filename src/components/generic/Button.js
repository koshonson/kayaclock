import React from 'react';

const Button = ({ content, onClick, className, style }) => {
	return (
		<div onClick={onClick} className={className} style={style}>
			{content}
		</div>
	);
};

export default Button;
