import '../styles/clock.css';
import React from 'react';

import ClockCell from './clock/ClockCell';
import Clock from './clock/Clock';

const ClockBoard = ({ menuVisible, clockStyle }) => {
	return (
		<div className={`clock centered ${menuVisible ? 'clock-open-menu' : ''}`}>
			<div className="clock-board">
				<ClockCell />
				<ClockCell>
					<div className="pin pin-top-one"></div>
					<div className="pin pin-top-two"></div>
				</ClockCell>
				<ClockCell />
				<ClockCell />
				<ClockCell type="center">
					<Clock />
				</ClockCell>
				<ClockCell />
				<ClockCell />
				<ClockCell>
					<div className="pin pin-bottom-one"></div>
				</ClockCell>
				<ClockCell />
			</div>
		</div>
	);
};

export default ClockBoard;
