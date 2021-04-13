import '../styles/menu.css';
import React, { useContext } from 'react';
import { styleContext } from '../context/styleContext';
import { clockHandStyler } from '../styles/clockStyleFunctions';

const Menu = ({ menuVisible }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const handStyles = clockHandStyler(currentStyles);

	return (
		<div className={`menu ${menuVisible ? 'menu-open' : ''}`}>
			<h3>Kaya Clock</h3>
			<input
				type="color"
				onChange={e => setStyle({ bgColor: e.target.value })}
			></input>
			<input
				type="color"
				onChange={({ target: { value } }) =>
					setStyle(handStyles.hrHand.leaf.color(value))
				}
			/>
			<input
				type="range"
				min="5"
				max="45"
				step="1"
				onChange={({ target: { value } }) =>
					setStyle(handStyles.hrHand.full.width(value))
				}
			/>
		</div>
	);
};

export default Menu;
