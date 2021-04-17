import React, { useContext } from 'react';
import { styleContext } from '../../context';
import { getClockPinsStyle } from '../../styles';

const containerStyle = {
	position: 'relative',
	width: '100%',
	height: '100%',
	border: '2px solid black',
	borderRadius: '50%'
};

const pinStyle = {
	color: 'rgb(0,0,0)',
	width: 1,
	length: 5,
	gap: 1,
	offset: 0,
	innerRadius: 0,
	outerRadius: 0
};

const PinSelectorCell = ({ mode: type }) => {
	const { style } = useContext(styleContext);

	const renderPins = () => {
		if (!style.clockPins[type].length) return;
		const pins = style.clockPins[type];
		return pins.map((pin, i) => {
			return (
				<div
					key={`pinController-${type}-${i}`}
					style={getClockPinsStyle({
						style: pinStyle,
						type,
						numPins: pins.length,
						pinIdx: i
					})}
				></div>
			);
		});
	};

	return <div style={containerStyle}>{renderPins()}</div>;
};

export default PinSelectorCell;
