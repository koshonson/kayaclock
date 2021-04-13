import React, { useContext, Fragment } from 'react';
import { styleContext } from '../context/styleContext';
import { getClockHandStyle } from '../styles/clockStyleFunctions';

const ClockHand = ({ rotation, type }) => {
	const { style } = useContext(styleContext);
	const { leaf, tail } = getClockHandStyle({ style, type, rotation });

	return (
		<Fragment>
			<div style={leaf}></div>
			<div style={tail}></div>
		</Fragment>
	);
};

export default ClockHand;
