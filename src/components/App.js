import '../styles/main.css';
import React, { useState } from 'react';
import { defaultStyles, getCanvasBg } from '../styles/clockStyleFunctions';
import { styleContext } from '../context/styleContext';

import { MenuIcon } from '../styles/icons';

import Menu from './Menu';
import ClockBoard from './ClockBoard';
import Button from './generic/Button';

const App = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const [clockStyle, setClockStyle] = useState(defaultStyles);

	const updateStyle = newStyles => {
		setClockStyle(current => ({ ...current, ...newStyles }));
	};

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

	return (
		<styleContext.Provider value={{ style: clockStyle, setStyle: updateStyle }}>
			<div className="container centered" style={getCanvasBg(clockStyle)}>
				<Button
					content={<MenuIcon />}
					onClick={toggleMenu}
					className="menu-btn"
				/>
				<Menu menuVisible={menuVisible} />
				<ClockBoard menuVisible={menuVisible} />
			</div>
		</styleContext.Provider>
	);
};

export default App;
