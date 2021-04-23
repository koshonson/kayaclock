import React, { useContext } from 'react';
import { styleContext } from '../../../context';
import { randomizer, dopeRandomize } from '../../../styles';

const Randomizer = ({ type, label, className }) => {
	const { style, setStyle } = useContext(styleContext);
	const randomize = randomizer(style);

	const handleClick = () => {
		if (type !== 'dope') {
			setStyle(randomize[type]());
		} else {
			dopeRandomize(() => setStyle(randomize[type]()));
		}
	};

	return (
		<div className={className} onClick={handleClick}>
			{label}
		</div>
	);
};

export default Randomizer;
