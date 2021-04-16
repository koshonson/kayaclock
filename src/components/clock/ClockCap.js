import React, { useContext, Fragment } from 'react';
import { styleContext } from '../../context';
import { getClockCapStyle } from '../../styles';

const ClockCap = () => {
	const { style } = useContext(styleContext);

	return (
		<Fragment>
			<div style={getClockCapStyle({ style, type: 'outer' })}></div>
			<div style={getClockCapStyle({ style, type: 'inner' })}></div>
		</Fragment>
	);
};

export default ClockCap;
