import React, { Fragment, useContext } from 'react';
import { useTime } from '../../hooks';
import { styleContext } from '../../context';

import ClockHand from './ClockHand';
import ClockCap from './ClockCap';

const Clock = () => {
	const rotations = useTime();
	const {
		style: { clockHands }
	} = useContext(styleContext);

	const renderHands = () => {
		const hands = Object.keys(clockHands);
		return hands
			.filter(hand => clockHands[hand])
			.map(hand => {
				return (
					<ClockHand
						rotation={rotations[hand]}
						type={`${hand}Hand`}
						key={`${hand}-hand`}
					/>
				);
			});
	};

	return (
		<Fragment>
			{renderHands()}
			<ClockCap rotations={rotations} />
		</Fragment>
	);
};

export default Clock;
