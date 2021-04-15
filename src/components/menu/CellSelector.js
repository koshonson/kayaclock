import React from 'react';

const cellStyle = {
	border: '1px solid black',
	borderRadius: '50%',
	cursor: 'pointer'
};

const CellSelector = () => {
	const handleMouseEnter = ({ target: { style } }) => {
		style.backgroundColor = 'yellow';
	};
	const handleMouseLeave = ({ target: { style } }) => {
		style.backgroundColor = 'white';
	};

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				width: '100%',
				height: '100%'
			}}
		>
			<div
				style={cellStyle}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			></div>
			<div style={cellStyle}></div>
			<div style={cellStyle}></div>
			<div style={cellStyle}></div>
			<div style={{ ...cellStyle, backgroundColor: 'black' }}></div>
			<div style={cellStyle}></div>
			<div style={cellStyle}></div>
			<div style={cellStyle}></div>
			<div style={cellStyle}></div>
		</div>
	);
};

export default CellSelector;
