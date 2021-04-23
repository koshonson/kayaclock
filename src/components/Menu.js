import '../styles/menu.css';
import React, { useState, useContext } from 'react';
import { menuContext, styleContext } from '../context';
import { LABELS } from '../styles';

import LangButtons from './menu/buttons/LangButtons';
import MenuSectionGeneral from './menu/sections/MenuSectionGeneral';
import MenuSectionHand from './menu/sections/MenuSectionHand';
import MenuSectionCap from './menu/sections/MenuSectionCap';
import MenuSectionCells from './menu/sections/MenuSectionCells';
import MenuSectionPins from './menu/sections/MenuSectionPins';

const SELECTORS = {
	cellCell: 'center',
	cellPin: { mode: 'batch', pinIdx: 3, label: 'all' },
	pin: 'batch'
};

const Menu = ({ menuVisible }) => {
	const [expanded, setExpanded] = useState('general');
	const [modes, setModes] = useState(SELECTORS);
	const [lang, setLang] = useState('en');
	const {
		style: { clockHands }
	} = useContext(styleContext);

	const changeMode = {
		cellCell: value => setModes({ ...modes, cellCell: value }),
		cellPin: (value, original = modes.cellPin) => {
			setModes({ ...modes, cellPin: { ...original, ...value } });
		},
		pin: value => setModes({ ...modes, pin: value })
	};

	const { mainHeader, sections } = LABELS;

	const renderHandsMenu = () => {
		const hands = Object.keys(clockHands);
		return hands
			.filter(hand => clockHands[hand])
			.map(hand => {
				return (
					<MenuSectionHand
						type={`${hand}Hand`}
						key={`${hand}Hand-menu`}
						title={sections.hands[hand][lang]}
					/>
				);
			});
	};

	return (
		<div className={`menu ${menuVisible ? 'menu-open' : ''}`}>
			<div className="menu-heading">{mainHeader[lang]}</div>
			<menuContext.Provider
				value={{ expanded, setExpanded, modes, changeMode, lang, setLang }}
			>
				<LangButtons />
				<MenuSectionGeneral title={sections.general[lang]} type="general" />
				<MenuSectionCells title={sections.cells[lang]} type="clockCells" />
				<MenuSectionPins title={sections.pins[lang]} type="clockPins" />
				{renderHandsMenu()}
				<MenuSectionCap title={sections.cap[lang]} type="clockCap" />
			</menuContext.Provider>
		</div>
	);
};

export default Menu;
