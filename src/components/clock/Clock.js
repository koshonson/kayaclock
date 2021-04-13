import React, { Fragment } from 'react';
import { useTime } from '../../hooks/useTime';

import ClockHand from './ClockHand';

const Clock = () => {
	const { hrRotation, mnRotation, scRotation } = useTime();

	return (
		<Fragment>
			<ClockHand rotation={mnRotation} type="mnHand" />
			<ClockHand rotation={hrRotation} type="hrHand" />
			<div className="clock-center-cap-outer"></div>
			<ClockHand rotation={scRotation} type="scHand" />
			<div className="clock-center-cap-inner"></div>
		</Fragment>
	);
};

export default Clock;
