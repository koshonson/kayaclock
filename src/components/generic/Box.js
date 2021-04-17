import React from 'react';

const Box = ({ size, children }) => {
	return (
		<div style={{ height: `${size}vmin`, width: `${size}vmin` }}>{children}</div>
	);
};

export default Box;
