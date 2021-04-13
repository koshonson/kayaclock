import React, { Fragment } from 'react';
import { useTime } from '../../hooks/useTime';

import ClockHand from './ClockHand';
import ClockCap from './ClockCap';

const Clock = () => {
	const { hrRotation, mnRotation, scRotation } = useTime();

	return (
		<Fragment>
			<ClockHand rotation={mnRotation} type="mnHand" />
			<ClockHand rotation={hrRotation} type="hrHand" />
			<ClockHand rotation={scRotation} type="scHand" />
			<ClockCap />
		</Fragment>
	);
};

export default Clock;
