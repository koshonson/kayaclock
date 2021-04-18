import React, { useContext } from 'react';
import { styleContext } from '../../../context';
import { getContrastBaseColor as contrastColor } from '../../../util';

import Button from '../../generic/Button';
import { RandomIcon } from '../../../styles/icons';

const RandomButton = ({ run }) => {
	const {
		style: { bgColorPrimary: bgColor }
	} = useContext(styleContext);

	return (
		<Button
			content={<RandomIcon fill={contrastColor(bgColor)} />}
			className="random-btn"
			onClick={run}
		/>
	);
};

export default RandomButton;
