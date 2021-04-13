import '../styles/main.css';
import React, { useState, useContext } from 'react';
import { defaultStyles, canvasBg } from '../styles/clockStyleFunctions';
import { styleContext } from '../context/styleContext';

import Menu from './Menu';
import ClockBoard from './ClockBoard';
import Button from './Button';

const App = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const [clockStyle, setClockStyle] = useState(defaultStyles);

	const updateStyle = newStyles => {
		setClockStyle(current => ({ ...current, ...newStyles }));
	};

	const openMenu = () => {
		setMenuVisible(!menuVisible);
	};

	return (
		<styleContext.Provider value={{ style: clockStyle, set: updateStyle }}>
			<div className="container centered" style={canvasBg(clockStyle)}>
				<Button content="📃" onClick={openMenu} className="menu-btn" />
				<Menu menuVisible={menuVisible} />
				<ClockBoard menuVisible={menuVisible} />
			</div>
		</styleContext.Provider>
	);
};

export default App;
