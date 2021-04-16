import React, { useContext } from 'react';
import { styleContext } from '../context';
import { getClockBoardStyle } from '../styles';

import ClockCell from './clock/ClockCell';
import Clock from './clock/Clock';

const ClockBoard = ({ menuVisible }) => {
	const { style } = useContext(styleContext);

	return (
		<div className={`clock centered ${menuVisible ? 'clock-open-menu' : ''}`}>
			<div style={getClockBoardStyle(style)}>
				<ClockCell type="topLeft" />
				<ClockCell type="top" />
				<ClockCell type="topRight" />
				<ClockCell type="left" />
				<ClockCell type="center">
					<Clock />
				</ClockCell>
				<ClockCell type="right" />
				<ClockCell type="bottomLeft" />
				<ClockCell type="bottom" />
				<ClockCell type="bottomRight" />
			</div>
		</div>
	);
};

export default ClockBoard;
