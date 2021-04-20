import React, { useState, useContext, useEffect } from 'react';
import { styleContext } from '../../../context';

const Controller = props => {
	const type = props.type === 'batch' ? 'top' : props.type;
	const { style, setStyle } = useContext(styleContext);
	const [numPins, setNumPins] = useState(style.clockPins[type].length);

	useEffect(() => {
		setNumPins(style.clockPins[type].length);
	}, [props.type, numPins]);

	const newPin = () => ({ ...style.defaultPin });

	const addPin = type => {
		const newStyles = style.clockPins;
		if (newStyles[type].length === 3) return;
		newStyles[type].push(newPin());
		setStyle({ clockPins: newStyles });
		setNumPins(numPins + 1);
	};

	const removePin = type => {
		const newStyles = style.clockPins;
		if (newStyles[type].length === 0) return;
		newStyles[type].pop();
		setStyle({ clockPins: newStyles });
		const newNumPins = numPins - 1 < 0 ? 0 : numPins - 1;
		setNumPins(newNumPins);
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
		<div style={{ display: 'flex', marginLeft: '20px' }}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ fontSize: '60%', color: 'rgba(0,0,0,0.45)' }}>
					Number of pins:
				</div>
				<div className="pin-selector">
					<div
						className="pin-selector-btn"
						value={numPins}
						onClick={handleRemovePin}
					>
						-
					</div>
					<div className="pin-selector-value">{numPins}</div>
					<div
						className="pin-selector-btn"
						value={numPins}
						onClick={handleAddPin}
					>
						+
					</div>
				</div>
			</div>
		</div>
	);
};

export default Controller;
