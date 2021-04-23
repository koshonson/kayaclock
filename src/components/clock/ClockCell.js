import React, { useContext } from 'react';
import { styleContext } from '../../context';
import { getClockCellStyle, getClockPinsStyle } from '../../styles';

const ClockCell = ({ type, children }) => {
	const { style } = useContext(styleContext);

	const renderPins = ({ style, type }) => {
		if (!style.clockPins[type]) return;
		const pins = style.clockPins[type];
		return pins.map((pin, i) => {
			return (
				<div
					key={`pin-${type}-${i}`}
					style={getClockPinsStyle({
						style: pin,
						type,
						numPins: pins.length,
						pinIdx: i
					})}
				></div>
			);
		});
	};

	return (
		<div style={getClockCellStyle({ style, type })}>
			{renderPins({ style, type })}
			{children}
		</div>
	);
};

export default ClockCell;
