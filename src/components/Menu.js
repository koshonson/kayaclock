import '../styles/menu.css';
import React, { useState, useContext } from 'react';
import { menuContext, styleContext } from '../context';

import MenuSectionGeneral from './menu/sections/MenuSectionGeneral';
import MenuSectionHand from './menu/sections/MenuSectionHand';
import MenuSectionCap from './menu/sections/MenuSectionCap';
import MenuSectionCells from './menu/sections/MenuSectionCells';
import MenuSectionPins from './menu/sections/MenuSectionPins';

const HAND_LABELS = {
	hr: 'Hour Hand',
	mn: 'Minute Hand',
	sc: 'Second Hand'
};

const Menu = ({ menuVisible }) => {
	const [expanded, setExpanded] = useState('general');
	const {
		style: { clockHands }
	} = useContext(styleContext);

	const renderHandsMenu = () => {
		const hands = Object.keys(clockHands);
		return hands
			.filter(hand => clockHands[hand])
			.map(hand => {
				return (
					<MenuSectionHand
						type={`${hand}Hand`}
						key={`${hand}Hand-menu`}
						title={HAND_LABELS[hand]}
					/>
				);
			});
	};

	return (
		<div className={`menu ${menuVisible ? 'menu-open' : ''}`}>
			<div className="menu-heading">Customize Clock</div>
			<menuContext.Provider value={{ expanded, setExpanded }}>
				<MenuSectionGeneral title="General" type="general" />
				<MenuSectionCells title="Clock Cells" type="clockCells" />
				<MenuSectionPins title="Clock Pins" type="clockPins" />
				{renderHandsMenu()}
				<MenuSectionCap title="Clock Cap" type="clockCap" />
			</menuContext.Provider>
		</div>
	);
};

export default Menu;
