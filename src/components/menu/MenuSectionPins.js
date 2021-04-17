import React, { useContext } from 'react';
import { styleContext } from '../../context';
import { clockPinStyler } from '../../styles';
import { rgbToHex, hexToRgb } from '../../util';

import MenuSection from './MenuSection';
import PinController from './PinController';
import PinSelectorCell from './PinSelectorCell';
import Input from '../generic/Input';
import Box from '../generic/Box';
import PinSelector from './PinSelector';

const MenuSectionPins = ({ type, title }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const {
		top: [pin]
	} = currentStyles.clockPins;
	const style = clockPinStyler({ type: 'top', pinIdx: 1 }, currentStyles);

	return (
		<MenuSection type={type} title={title}>
			<div className="menu-section-content-block-label">Pin:</div>
			<div className="menu-section-content-block">
				{/* <Input
					label="Pin Color"
					display={false}
					type="color"
					value={rgbToHex(pin.color)}
					onChange={({ target: { value } }) => {
						setStyle(style.color(hexToRgb(value)));
					}}
				/>
				<Input
					label="Pin Offset"
					display={true}
					type="range"
					value={pin.offset}
					min="0"
					max={pin.length + 1}
					step="1"
					onChange={({ target: { value } }) =>
						setStyle(style.offset(value))
					}
				/> */}
				<Box size="10">
					<PinSelector />
				</Box>
				<Box size="10">
					<PinSelectorCell mode="bottom" />
				</Box>
				<PinController type="bottom" />
			</div>
		</MenuSection>
	);
};

export default MenuSectionPins;
