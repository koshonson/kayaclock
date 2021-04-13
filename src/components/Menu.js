import '../styles/menu.css';
import React, { useContext } from 'react';
import { styleContext } from '../context/styleContext';

const Menu = ({ menuVisible }) => {
	const { setStyle } = useContext(styleContext);

	return (
		<div className={`menu ${menuVisible ? 'menu-open' : ''}`}>
			<h3>Menu</h3>
			<ul>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
			</ul>
			<input
				type="color"
				onChange={e => setStyle({ bgColor: e.target.value })}
			></input>
		</div>
	);
};

export default Menu;
