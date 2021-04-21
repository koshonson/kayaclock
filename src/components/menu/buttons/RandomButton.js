import React, { useContext } from 'react';
import { styleContext } from '../../../context';

import Button from '../../generic/Button';
import { RandomIcon } from '../../../styles/icons';

const RandomButton = ({ randomize, style, size, yShift }) => {
	const { setStyle } = useContext(styleContext);

	return (
		<Button
			content={
				<RandomIcon fill="rgba(0,0,0,0.2)" size={size} yShift={yShift} />
			}
			className="random-btn"
			style={style}
			onClick={() => setStyle(randomize())}
		/>
	);
};

export default RandomButton;
