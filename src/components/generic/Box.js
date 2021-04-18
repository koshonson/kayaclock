import React from 'react';

const Box = ({ size, style, children }) => {
	return (
		<div style={{ height: `${size}vmin`, width: `${size}vmin`, ...style }}>
			{children}
		</div>
	);
};

export default Box;
