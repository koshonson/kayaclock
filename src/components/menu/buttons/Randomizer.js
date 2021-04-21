import React, { useContext } from 'react';
import { styleContext } from '../../../context';
import { randomizer } from '../../../styles';

const Randomizer = ({ type, label }) => {
	const { style, setStyle } = useContext(styleContext);
	const randomize = randomizer(style);

	return (
		<div
			style={{ border: '1px solid red', cursor: 'pointer' }}
			onClick={() => setStyle(randomize[type]())}
		>
			{label}
		</div>
	);
};

export default Randomizer;
