import React, { useContext } from 'react';
import MenuSection from './MenuSection';
import { styleContext } from '../../context/styleContext';
import { rgbToHex, hexToRgb } from '../../util';

import Input from '../generic/Input';

const MenuSectionGeneral = ({ title, type }) => {
	const {
		style: { bgColor },
		setStyle
	} = useContext(styleContext);

	return (
		<MenuSection title={title} type={type}>
			<Input
				label="Background"
				type="color"
				value={rgbToHex(bgColor)}
				onChange={({ target: { value } }) => {
					setStyle({ bgColor: hexToRgb(value) });
				}}
			/>
		</MenuSection>
	);
};

export default MenuSectionGeneral;
