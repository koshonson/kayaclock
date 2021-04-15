import '../styles/menu.css';
import React, { useState } from 'react';
import { menuContext } from '../context/menuContext';

import MenuSectionGeneral from './menu/MenuSectionGeneral';
import MenuSectionHand from './menu/MenuSectionHand';
import MenuSectionCap from './menu/MenuSectionCap';
import MenuSectionCells from './menu/MenuSectionCells';
import MenuSectionPins from './menu/MenuSectionPins';

const Menu = ({ menuVisible }) => {
	const [expanded, setExpanded] = useState('general');

	return (
		<div className={`menu ${menuVisible ? 'menu-open' : ''}`}>
			<div className="menu-heading">Customize Clock</div>
			<menuContext.Provider value={{ expanded, setExpanded }}>
				<MenuSectionGeneral title="General" type="general" />
				<MenuSectionHand title="Hour Hand" type="hrHand" />
				<MenuSectionHand title="Minute Hand" type="mnHand" />
				<MenuSectionHand title="Second Hand" type="scHand" />
				<MenuSectionCap title="Clock Cap" type="clockCap" />
				<MenuSectionCells title="Clock Cells" type="clockCells" />
				<MenuSectionPins title="Clock Pins" type="clockPins" />
			</menuContext.Provider>
		</div>
	);
};

export default Menu;
