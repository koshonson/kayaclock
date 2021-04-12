import '../styles/main.css';
import React, { useState } from 'react';

import Menu from './Menu';
import Clock from './Clock';
import Button from './Button';
import { defaultStyles, canvasBg } from '../styles/clockStyleFunctions';

const App = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const [clockStyle, setClockStyle] = useState(defaultStyles);

	const openMenu = () => {
		setMenuVisible(!menuVisible);
	};

	return (
		<div className="container centered" style={canvasBg(clockStyle)}>
			<Button content="📃" onClick={openMenu} className="menu-btn" />
			<Menu menuVisible={menuVisible} />
			<Clock menuVisible={menuVisible} />
		</div>
	);
};

export default App;
