import React, { useState, useContext } from 'react';
import { styleContext } from '../../../context';

const Controller = props => {
	const type = props.type === 'batch' ? 'top' : props.type;
	const { style, setStyle } = useContext(styleContext);
	const [numPins, setNumPins] = useState(style.clockPins[type].length);

	const newPin = () => ({ ...style.defaultPin });

	const addPin = type => {
		const newStyles = style.clockPins;
		if (newStyles[type].length === 3) return;
		newStyles[type].push(newPin());
		setStyle(newStyles);
		setNumPins(numPins + 1);
	};

	const removePin = type => {
		const newStyles = style.clockPins;
		if (newStyles[type].length === 0) return;
		newStyles[type].pop();
		setStyle(newStyles);
		setNumPins(numPins - 1);
	};

	const batchHandler = callback => {
		['top', 'left', 'right', 'bottom'].forEach(cell => {
			callback(cell);
		});
	};

	const handleAddPin = () => {
		if (props.type === 'batch') {
			batchHandler(addPin);
		} else {
			addPin(type);
		}
	};

	const handleRemovePin = () => {
		if (props.type === 'batch') {
			batchHandler(removePin);
		} else {
			removePin(type);
		}
	};

	return (
		<div style={{ display: 'flex' }}>
			<button value={numPins} onClick={handleRemovePin}>
				-
			</button>
			<div>{numPins}</div>
			<button value={numPins} onClick={handleAddPin}>
				+
			</button>
		</div>
	);
};

export default Controller;
