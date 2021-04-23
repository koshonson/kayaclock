import React, { useContext } from 'react';
import { styleContext } from '../context';
import { clockHandToggler, canvasBgStyler, getRandomBg } from '../styles';

import Randomizer from './menu/buttons/Randomizer';

const MenuMobile = () => {
	const { style, setStyle } = useContext(styleContext);

	return (
		<div className="menu-mobile menu-mobile-btn-section">
			<label>Randomize</label>
			<Randomizer
				className="randomizer-mobile-btn randomizer-btn-tame"
				type="tame"
				label="Go Tame"
			/>
			<Randomizer
				className="randomizer-mobile-btn randomizer-btn-wild"
				type="wild"
				label="Go Wild"
			/>
			<Randomizer
				className="randomizer-mobile-btn randomizer-btn-dope"
				type="dope"
				label="Go Dope"
			/>
			<Randomizer
				className="randomizer-mobile-btn randomizer-btn-reset"
				type="reset"
				label="Reset"
			/>
		</div>
	);
};

export default MenuMobile;
