import React, { useContext } from 'react';
import { styleContext, menuContext } from '../../../context';
import { clockPinStyler } from '../../../styles';
import { rgbToHex, hexToRgb } from '../../../util';

import MenuSection from './MenuSection';
import Selector from '../pin_selector/Selector';
import FinePinBlock from '../pin_selector/FinePinBlock';
import Input from '../../generic/Input';
import Box from '../../generic/Box';

const MenuSectionPins = ({ type, title }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const { modes } = useContext(menuContext);
	const refCell = modes.cellPin.mode === 'batch' ? 'top' : modes.cellPin.mode;
	const refPinIdx = modes.cellPin.pinIdx === 3 ? 0 : modes.cellPin.pinIdx;

	const pin =
		currentStyles.clockPins[refCell][refPinIdx] || currentStyles.defaultPin;
	const style = clockPinStyler(
		{ type: modes.cellPin.mode, pinIdx: modes.cellPin.pinIdx },
		currentStyles
	);

	const renderGapInput = () => {
		if (modes.cellPin.pinIdx !== 3) return <></>;
		return (
			<Input
				label="Pin Gap"
				display={true}
				type="range"
				value={pin.gap}
				min="0"
				max="10"
				step="0.5"
				onChange={({ target: { value } }) => setStyle(style.gap(value))}
			/>
		);
	};

	return (
		<MenuSection type={type} title={title}>
			<div className="menu-section-content-block jc-sb ai-st">
				<Box size="10" style={{ marginTop: '1vmin' }}>
					<Selector />
				</Box>
				<FinePinBlock
					mode={modes.cellPin.mode}
					pinLabel={modes.cellPin.label}
				/>
			</div>
			<div
				className="menu-section-content-block jc-sb"
				style={{ marginTop: '1vmin' }}
			>
				<Input
					label="Color"
					display={false}
					type="color"
					value={rgbToHex(pin.color)}
					className="color-input-rect"
					onChange={({ target: { value } }) => {
						setStyle(style.color(hexToRgb(value)));
					}}
				/>
				<Input
					label="Width"
					display={true}
					type="range"
					value={pin.width}
					min="0"
					max="10"
					step="0.5"
					onChange={({ target: { value } }) =>
						setStyle(style.width(value))
					}
				/>
				<Input
					label="Length"
					display={true}
					type="range"
					value={pin.length}
					min="0"
					max="30"
					step="0.5"
					onChange={({ target: { value } }) =>
						setStyle(style.length(value))
					}
				/>
				<Input
					label="Offset"
					display={true}
					type="range"
					value={pin.offset}
					min="0"
					max="15"
					step="0.5"
					onChange={({ target: { value } }) =>
						setStyle(style.offset(value))
					}
				/>
			</div>
			<div
				className="menu-section-content-block jc-sa"
				style={{ marginTop: '1vmin' }}
			>
				<Input
					label="Inner Radius"
					display={true}
					type="range"
					value={pin.innerRadius}
					min="0"
					max="50"
					step="1"
					onChange={({ target: { value } }) =>
						setStyle(style.innerRadius(value))
					}
				/>
				<Input
					label="Outer Radius"
					display={true}
					type="range"
					value={pin.outerRadius}
					min="0"
					max="50"
					step="1"
					onChange={({ target: { value } }) =>
						setStyle(style.outerRadius(value))
					}
				/>
				{renderGapInput()}
			</div>
		</MenuSection>
	);
};

export default MenuSectionPins;
