import React, { Fragment } from 'react';

const ClockHand = ({ style, rotation }) => {
	return (
		<Fragment>
			<div
				className="hand-leaf mn-hand-leaf"
				style={{ transform: `rotate(${rotation}deg)` }}
			></div>
			<div
				className="hand-tail mn-hand-tail"
				style={{ transform: `rotate(${rotation}deg)` }}
			></div>
		</Fragment>
	);
};

export default ClockHand;
