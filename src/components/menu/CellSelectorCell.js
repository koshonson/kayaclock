import React from 'react';

const cellStyle = {
	border: '1px solid black',
	borderRadius: '50%'
};

const stateColors = {
	highlighted: 'yellow',
	selected: 'green'
};

const CellSelectorCell = ({ code, cellState, setHovered, selectCells, active }) => {
	const cursor = active ? 'pointer' : 'default';
	const baseBg = code === 'center' ? 'black' : 'white';
	const backgroundColor = cellState ? stateColors[cellState] : baseBg;

	return (
		<div
			style={{ ...cellStyle, backgroundColor, cursor }}
			onMouseEnter={() => setHovered(code)}
			onMouseLeave={() => setHovered(null)}
			onClick={() => selectCells(code)}
		></div>
	);
};

export default CellSelectorCell;
