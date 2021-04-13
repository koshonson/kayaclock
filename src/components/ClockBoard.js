import '../styles/clock.css';
import React from 'react';

import Clock from './Clock';

const ClockBoard = ({ menuVisible, clockStyle }) => {
	return (
		<div className={`clock centered ${menuVisible ? 'clock-open-menu' : ''}`}>
			<div className="clock-board">
				<div className="clock-cell"></div>
				<div className="clock-cell">
					<div className="pin pin-top-one"></div>
					<div className="pin pin-top-two"></div>
				</div>
				<div className="clock-cell"></div>
				<div className="clock-cell"></div>
				<div className="clock-cell clock-center">
					<Clock />
				</div>
				<div className="clock-cell"></div>
				<div className="clock-cell"></div>
				<div className="clock-cell">
					<div className="pin pin-bottom-one"></div>
				</div>
				<div className="clock-cell"></div>
			</div>
		</div>
	);
};

export default ClockBoard;
