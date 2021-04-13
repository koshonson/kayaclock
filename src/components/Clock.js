import React, { Fragment } from 'react';
import { useTime } from '../hooks/useTime';

import ClockHand from './ClockHand';

const Clock = () => {
	const { hrHandLeaf, hrHandTail, mnRotation, scHandLeaf, scHandTail } = useTime();

	return (
		<Fragment>
			<ClockHand rotation={mnRotation} />
			<div className="hand-leaf hr-hand-leaf" ref={hrHandLeaf}></div>
			<div className="hand-tail hr-hand-tail" ref={hrHandTail}></div>
			<div className="clock-center-cap-outer"></div>
			<div className="hand-leaf sc-hand-leaf" ref={scHandLeaf}></div>
			<div className="hand-tail sc-hand-tail" ref={scHandTail}></div>
			<div className="clock-center-cap-inner"></div>
		</Fragment>
	);
};

export default Clock;
