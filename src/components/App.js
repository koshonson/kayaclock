import '../styles/main.css';
import React, { useState } from 'react';

import Menu from './Menu';
import ClockBoard from './ClockBoard';
import Button from './Button';
import { defaultStyles, canvasBg } from '../styles/clockStyleFunctions';

const App = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const [clockStyle, setClockStyle] = useState(defaultStyles);

	const openMenu = () => {
		setMenuVisible(!menuVisible);
	};

	const updateStyle = newStyles => {
		setClockStyle(current => ({ ...current, ...newStyles }));
	};

	return (
		<div className="container centered" style={canvasBg(clockStyle)}>
			<Button content="📃" onClick={openMenu} className="menu-btn" />
			<Menu menuVisible={menuVisible} updateStyle={updateStyle} />
			<ClockBoard menuVisible={menuVisible} />
		</div>
	);
};

export default App;
