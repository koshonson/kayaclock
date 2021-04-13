import '../styles/menu.css';
import React from 'react';

const Menu = ({ menuVisible, updateStyle }) => {
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
				onChange={e => updateStyle({ bgColor: e.target.value })}
			></input>
		</div>
	);
};

export default Menu;
