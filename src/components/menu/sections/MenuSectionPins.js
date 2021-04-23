import React, { useContext } from 'react';
import { styleContext, menuContext } from '../../../context';
import { clockPinStyler, LABELS } from '../../../styles';
import { rgbToHex, hexToRgb, random } from '../../../util';

import MenuSection from './MenuSection';
import Selector from '../pin_selector/Selector';
import FinePinBlock from '../pin_selector/FinePinBlock';
import Input from '../../generic/Input';
import Box from '../../generic/Box';

const MenuSectionPins = ({ type, title }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const { modes, lang } = useContext(menuContext);
	const refCell = modes.cellPin.mode === 'batch' ? 'top' : modes.cellPin.mode;
	const refPinIdx = modes.cellPin.pinIdx === 3 ? 0 : modes.cellPin.pinIdx;

	const pin = { ...currentStyles.clockPins[refCell] }[refPinIdx] || {
		...currentStyles.defaultPin
	};
	const style = clockPinStyler(
		{ type: modes.cellPin.mode, pinIdx: modes.cellPin.pinIdx },
		currentStyles
	);
	const { generic: labels } = LABELS;

	const renderGapInput = () => {
		if (modes.cellPin.pinIdx !== 3) return <></>;
		return (
			<Input
				label={labels.pinGap[lang]}
				display={true}
				type="range"
				value={pin.gap}
				min="0"
				max="10"
				step="0.5"
				decimals="1"
				onChange={({ target: { value } }) => setStyle(style.gap(value))}
				randomize={() => {
					setStyle(style.gap(random.halfNum(0, 10)));
				}}
			/>
		);
	};

	//console.log(style, style.rendom);

	return (
		<MenuSection type={type} title={title}>
			<div className="menu-section-content-block jc-sb ai-st">
				<Box size="10" style={{ marginTop: '1vmin' }}>
					<Selector />
				</Box>
				<FinePinBlock
					mode={modes.cellPin.mode}
					pinLabel={modes.cellPin.label}
					randomize={style.random}
					lang={lang}
				/>
			</div>
			<div
				className="menu-section-content-block jc-sb"
				style={{ marginTop: '1vmin' }}
			>
				<Input
					label={labels.color[lang]}
					display={false}
					type="color"
					value={rgbToHex(pin.color)}
					className="color-input-rect"
					onChange={({ target: { value } }) => {
						setStyle(style.color(hexToRgb(value)));
					}}
					randomize={() => {
						setStyle(style.color(random.color()));
					}}
				/>
				<Input
					label={labels.width[lang]}
					display={true}
					type="range"
					value={pin.width}
					min="0"
					max="10"
					step="0.5"
					decimals="1"
					onChange={({ target: { value } }) =>
						setStyle(style.width(value))
					}
					randomize={() => {
						setStyle(style.width(random.halfNum(0, 10)));
					}}
				/>
				<Input
					label={labels.length[lang]}
					display={true}
					type="range"
					value={pin.length}
					min="0"
					max="30"
					step="0.5"
					decimals="1"
					onChange={({ target: { value } }) =>
						setStyle(style.length(value))
					}
					randomize={() => {
						setStyle(style.length(random.halfNum(0, 30)));
					}}
				/>
				<Input
					label={labels.offset[lang]}
					display={true}
					type="range"
					value={pin.offset}
					min="0"
					max="15"
					step="0.5"
					decimals="1"
					onChange={({ target: { value } }) =>
						setStyle(style.offset(value))
					}
					randomize={() => {
						setStyle(style.offset(random.halfNum(0, 15)));
					}}
				/>
			</div>
			<div
				className="menu-section-content-block jc-sa"
				style={{ marginTop: '1vmin' }}
			>
				<Input
					label={labels.innerRadius[lang]}
					display={true}
					type="range"
					value={pin.innerRadius}
					min="0"
					max="50"
					step="1"
					onChange={({ target: { value } }) =>
						setStyle(style.innerRadius(value))
					}
					randomize={() => {
						setStyle(style.innerRadius(random.radius()));
					}}
				/>
				<Input
					label={labels.outerRadius[lang]}
					display={true}
					type="range"
					value={pin.outerRadius}
					min="0"
					max="50"
					step="1"
					onChange={({ target: { value } }) =>
						setStyle(style.outerRadius(value))
					}
					randomize={() => {
						setStyle(style.outerRadius(random.radius()));
					}}
				/>
				{renderGapInput()}
			</div>
		</MenuSection>
	);
};

export default MenuSectionPins;
