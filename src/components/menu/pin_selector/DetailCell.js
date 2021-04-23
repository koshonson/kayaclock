import React, { useContext } from 'react';
import { styleContext, menuContext } from '../../../context';
import { getClockPinsStyle } from '../../../styles';
import { usePinSelector } from '../../../hooks';

import Pin from './Pin';

const containerStyle = {
	position: 'relative',
	width: '100%',
	height: '100%',
	border: '4px solid black',
	borderRadius: '50%',
	zIndex: 5
};

const pinStyle = {
	color: 'rgb(0,0,0)',
	width: 0.6,
	length: 3.5,
	gap: 0.55,
	offset: 0,
	innerRadius: 0,
	outerRadius: 0
};

const DetailCell = ({ mode: type }) => {
	const {
		style: { clockPins }
	} = useContext(styleContext);
	const { changeMode } = useContext(menuContext);
	const numPins = clockPins[type].length;
	const { setHovered, getPinState, selectPins } = usePinSelector({
		changeMode,
		numPins,
		type
	});

	const renderPins = () => {
		if (!numPins) return;
		const pins = clockPins[type];
		return pins.map((pin, i) => {
			return (
				<Pin
					key={`pinController-${type}-${i}`}
					pinIdx={i}
					numPins={numPins}
					style={getClockPinsStyle({
						style: pinStyle,
						type,
						numPins,
						pinIdx: i
					})}
					setHovered={setHovered}
					pinState={getPinState(i)}
					selectPins={selectPins}
				></Pin>
			);
		});
	};

	return <div style={containerStyle}>{renderPins()}</div>;
};

export default DetailCell;
