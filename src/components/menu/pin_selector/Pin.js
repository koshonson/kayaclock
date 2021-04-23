import React from 'react';

const stateColors = {
	basic: 'black',
	highlighted: 'yellow',
	selected: 'green'
};

const Pin = ({ style, pinIdx, setHovered, pinState, selectPins }) => {
	const cursor = 'pointer';
	const backgroundColor = pinState ? stateColors[pinState] : stateColors.basic;

	return (
		<div
			style={{ ...style, cursor, backgroundColor }}
			onMouseEnter={() => {
				setHovered(pinIdx);
			}}
			onMouseLeave={() => {
				setHovered(null);
			}}
			onClick={() => selectPins(pinIdx)}
		></div>
	);
};

export default Pin;
