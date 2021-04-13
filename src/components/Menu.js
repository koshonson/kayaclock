import '../styles/menu.css';
import React, { useContext } from 'react';
import { styleContext } from '../context/styleContext';
import { setClockHandStyle } from '../styles/clockStyleFunctions';

const Menu = ({ menuVisible }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);

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
			<input
				type="color"
				onChange={e =>
					setStyle(
						setClockHandStyle(
							{
								type: 'hrHand',
								scope: 'full',
								styles: {
									color: e.target.value
								}
							},
							currentStyles
						)
					)
				}
			/>
			<input
				type="range"
				min="5"
				max="45"
				step="1"
				onChange={e =>
					setStyle(
						setClockHandStyle(
							{
								type: 'mnHand',
								scope: 'leaf',
								styles: {
									height: e.target.value
								}
							},
							currentStyles
						)
					)
				}
			/>
		</div>
	);
};

export default Menu;
