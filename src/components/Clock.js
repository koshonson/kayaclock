import '../styles/clock.css';
import React, { useState } from 'react';

const Clock = ({ menuVisible, clockStyle }) => {
	const [time, setTime] = useState(new Date());

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
					<div className="hand-leaf hr-hand-leaf"></div>
					<div className="hand-tail hr-hand-tail"></div>
					<div className="hand-leaf mn-hand-leaf"></div>
					<div className="hand-tail mn-hand-tail"></div>
					<div className="clock-center-cap-outer"></div>
					<div className="hand-leaf sc-hand-leaf"></div>
					<div className="hand-tail sc-hand-tail"></div>
					<div className="clock-center-cap-inner"></div>
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

export default Clock;
