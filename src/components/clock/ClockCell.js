import React from 'react';

const ClockCell = ({ type, children }) => {
	return (
		<div
			className={`clock-cell ${
				type === 'center' ? 'clock-center' : ''
			}`.trim()}
		>
			{children}
		</div>
	);
};

export default ClockCell;
