import React from 'react';

const Button = ({ content, onClick, className }) => {
	return (
		<button onClick={onClick} className={className}>
			{content}
		</button>
	);
};

export default Button;
