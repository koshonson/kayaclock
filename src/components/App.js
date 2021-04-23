import '../styles/main.css';
import React, { useState } from 'react';
import { defaultStyles, getCanvasBg } from '../styles';
import { styleContext } from '../context';

import Menu from './Menu';
import MenuButton from './menu/buttons/MenuButton';
import ClockBoard from './ClockBoard';
import MenuMobile from './MenuMobile';

const initialStyles = JSON.parse(JSON.stringify(defaultStyles));

const App = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const [clockStyle, setClockStyle] = useState(initialStyles);

	const updateStyle = newStyles => {
		setClockStyle(current => ({ ...current, ...newStyles }));
	};

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

	return (
		<styleContext.Provider value={{ style: clockStyle, setStyle: updateStyle }}>
			<div className="container centered" style={getCanvasBg(clockStyle)}>
				<MenuButton toggleMenu={toggleMenu} />
				<Menu menuVisible={menuVisible} />
				<MenuMobile />
				<ClockBoard menuVisible={menuVisible} />
			</div>
		</styleContext.Provider>
	);
};

export default App;
