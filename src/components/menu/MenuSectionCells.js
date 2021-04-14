import React, { useContext } from 'react';
import { styleContext } from '../../context/styleContext';
import { clockCellStyler } from '../../styles/clockStyleFunctions';
import { rgbToHex, hexToRgb } from '../../util';

import MenuSection from './MenuSection';
import Input from '../generic/Input';

const MenuSectionCells = ({ title, type }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const style = clockCellStyler('outer', currentStyles);
	const { topLeft } = currentStyles.clockCells;

	return (
		<MenuSection title={title} type={type}>
			<div className="menu-section-content-block-label">Inner:</div>
			<div className="menu-section-content-block">
				<Input
					label="Border Color"
					display={false}
					type="color"
					value={rgbToHex(topLeft.borderColor)}
					onChange={({ target: { value } }) =>
						setStyle(style.borderColor(hexToRgb(value)))
					}
				/>
				<Input
					label="Border Width"
					display={true}
					type="range"
					value={topLeft.borderWidth}
					min="1"
					max="20"
					step="1"
					onChange={({ target: { value } }) =>
						setStyle(style.borderWidth(value))
					}
				/>
			</div>
		</MenuSection>
	);
};

export default MenuSectionCells;
