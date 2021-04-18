import React, { useContext } from 'react';
import { styleContext, menuContext } from '../../../context';
import { clockCellStyler } from '../../../styles';
import { rgbToHex, hexToRgb } from '../../../util';

import MenuSection from './MenuSection';
import Input from '../../generic/Input';
import Box from '../../generic/Box';
import Selector from '../cell_selector/Selector';

const MenuSectionCells = ({ title, type }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const { modes } = useContext(menuContext);
	const style = clockCellStyler(modes.cellCell, currentStyles);
	const { topLeft } = currentStyles.clockCells;

	return (
		<MenuSection title={title} type={type}>
			<div className="menu-section-content-block jc-sb">
				<Box size="10" style={{ marginTop: '1vmin' }}>
					<Selector />
				</Box>
				<div>{modes.cellCell}</div>
			</div>
			<div className="menu-section-content-block jc-sb">
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
