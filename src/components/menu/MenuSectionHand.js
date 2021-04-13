import React, { useContext } from 'react';
import { styleContext } from '../../context/styleContext';
import { clockHandStyler } from '../../styles/clockStyleFunctions';

import MenuSection from './MenuSection';

const MenuSectionHand = ({ title, type }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const { [type]: style } = clockHandStyler(currentStyles);
	const { leaf, tail } = currentStyles[type];

	return (
		<MenuSection title={title} type={type}>
			<label>Color</label>
			<input
				type="color"
				value={leaf.color}
				onChange={({ target: { value } }) =>
					setStyle(style.full.color(value))
				}
			></input>
			<label>Width</label>
			<input
				type="range"
				min="0.2"
				max="4"
				step="0.1"
				value={leaf.width}
				onChange={({ target: { value } }) =>
					setStyle(style.full.width(value))
				}
			/>
			<label>Length</label>
			<input
				type="range"
				min="5"
				max="49"
				step="1"
				value={leaf.height}
				onChange={({ target: { value } }) =>
					setStyle(style.leaf.length(value))
				}
			/>
		</MenuSection>
	);
};

export default MenuSectionHand;
