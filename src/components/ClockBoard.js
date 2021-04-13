import '../styles/clock.css';
import React from 'react';

import ClockCell from './ClockCell';
import Clock from './Clock';

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
				<div className="clock-cell clock-center">
					<Clock />
				</div>
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
