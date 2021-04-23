import React, { useContext, Fragment } from 'react';
import { styleContext } from '../../context';
import { getClockCapStyle } from '../../styles';

const ClockCap = ({ rotations }) => {
	const { style } = useContext(styleContext);

	const rotateCap = capStyle => {
		const { snap, rotation } = capStyle;
		const rotationAngle = rotation ? 45 : 0;
		const snapAngle = snap ? rotations[snap] : 0;
		const angle = rotationAngle + snapAngle;
		return { transform: `rotate(${angle}deg)` };
	};

	return (
		<Fragment>
			<div
				style={{
					...getClockCapStyle({ style, type: 'outer' }),
					...rotateCap(style.clockCap.outer)
				}}
			></div>
			<div
				style={{
					...getClockCapStyle({ style, type: 'inner' }),
					...rotateCap(style.clockCap.inner)
				}}
			></div>
		</Fragment>
	);
};

export default ClockCap;
