import '../styles/menu.css';
import React from 'react';

const Menu = ({ menuVisible }) => {
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
		</div>
	);
};

export default Menu;
