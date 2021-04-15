import React, { useContext } from 'react';
import { styleContext } from '../../context/styleContext';
import { clockHandToggler } from '../../styles/clockStyleFunctions';
import { rgbToHex, hexToRgb } from '../../util';

import MenuSection from './MenuSection';
import Input from '../generic/Input';

const MenuSectionGeneral = ({ title, type }) => {
	const { style, setStyle } = useContext(styleContext);
	const toggleHand = clockHandToggler(style);

	return (
		<MenuSection title={title} type={type}>
			<Input
				label="Background"
				type="color"
				value={rgbToHex(style.bgColor)}
				onChange={({ target: { value } }) => {
					setStyle({ bgColor: hexToRgb(value) });
				}}
			/>
			<div style={{ display: 'flex' }}>
				<button onClick={() => setStyle(toggleHand.hr())}>Hour Hand</button>
				<button onClick={() => setStyle(toggleHand.mn())}>
					Minute Hand
				</button>
				<button onClick={() => setStyle(toggleHand.sc())}>
					Second Hand
				</button>
			</div>
		</MenuSection>
	);
};

export default MenuSectionGeneral;
