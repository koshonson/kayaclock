import React, { useContext } from 'react';
import { styleContext, menuContext } from '../../../context';
import { clockCellStyler, cellSelectorReferences } from '../../../styles';
import { rgbToHex, hexToRgb, random } from '../../../util';

import MenuSection from './MenuSection';
import Input from '../../generic/Input';
import Box from '../../generic/Box';
import Selector from '../cell_selector/Selector';
import Label from '../cell_selector/Label';

const MenuSectionCells = ({ title, type }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const { modes } = useContext(menuContext);
	const style = clockCellStyler(modes.cellCell, currentStyles);
	const { getReferenceCell } = cellSelectorReferences();
	const cells = currentStyles.clockCells[getReferenceCell(modes.cellCell)];

	const renderShadowControls = () => {
		if (modes.cellCell !== 'outer') return <></>;
		return (
			<>
				<label>Shadow</label>
				<div className="menu-section-content-block jc-sb">
					<Input
						label="Color"
						display={false}
						type="color"
						className="color-input-rect"
						value={rgbToHex(cells.shadowColor)}
						onChange={({ target: { value } }) =>
							setStyle(style.shadowColor(hexToRgb(value)))
						}
						randomize={() => {
							style.shadowColor(random.color());
						}}
					/>
					<Input
						label="Opacity"
						display={true}
						type="range"
						value={cells.shadowOpacity}
						min="0"
						max="1"
						step="0.05"
						decimals="2"
						onChange={({ target: { value } }) =>
							setStyle(style.shadowOpacity(value))
						}
						randomize={() => {
							style.shadowOpacity(random.opacity());
						}}
					/>
					<Input
						label="Thickness"
						display={true}
						type="range"
						value={cells.shadowThickness}
						min="0"
						max="80"
						step="1"
						onChange={({ target: { value } }) =>
							setStyle(style.shadowThickness(value))
						}
						randomize={() => {
							style.shadowThickness(random.wholeNum(0, 80));
						}}
					/>
					<Input
						label="Blur"
						display={true}
						type="range"
						value={cells.shadowBlur}
						min="0"
						max="50"
						step="1"
						onChange={({ target: { value } }) =>
							setStyle(style.shadowBlur(value))
						}
						randomize={() => {
							setStyle(style.shadowBlur(random.wholeNum(0, 50)));
						}}
					/>
				</div>
			</>
		);
	};

	return (
		<MenuSection title={title} type={type}>
			<div className="menu-section-content-block jc-sb ai-st">
				<Box size="10" style={{ marginTop: '1vmin' }}>
					<Selector />
				</Box>
				<Label label={modes.cellCell} />
			</div>
			<label>Border</label>
			<div className="menu-section-content-block jc-sb">
				<Input
					label="Color"
					display={false}
					type="color"
					className="color-input-rect"
					value={rgbToHex(cells.borderColor)}
					onChange={({ target: { value } }) =>
						setStyle(style.borderColor(hexToRgb(value)))
					}
					randomize={() => {
						setStyle(style.borderColor(random.color()));
					}}
				/>
				<Input
					label="Opacity"
					display={true}
					type="range"
					value={cells.borderOpacity}
					min="0"
					max="1"
					step="0.05"
					decimals="2"
					onChange={({ target: { value } }) =>
						setStyle(style.borderOpacity(value))
					}
					randomize={() => {
						setStyle(style.borderOpacity(random.opacity()));
					}}
				/>
				<Input
					label="Width"
					display={true}
					type="range"
					value={cells.borderWidth}
					min="0"
					max="80"
					step="1"
					onChange={({ target: { value } }) =>
						setStyle(style.borderWidth(value))
					}
					randomize={() => {
						setStyle(style.borderWidth(random.wholeNum(0, 80)));
					}}
				/>
				<Input
					label="Radius"
					display={true}
					type="range"
					value={cells.borderRadius}
					min="0"
					max="50"
					step="1"
					onChange={({ target: { value } }) =>
						setStyle(style.borderRadius(value))
					}
					randomize={() => {
						setStyle(style.borderRadius(random.radius()));
					}}
				/>
			</div>
			<label>Fill</label>
			<div className="menu-section-content-block jc-fs">
				<Input
					label="Color"
					display={false}
					type="color"
					className="color-input-rect"
					value={rgbToHex(cells.bgColor)}
					onChange={({ target: { value } }) =>
						setStyle(style.bgColor(hexToRgb(value)))
					}
					randomize={() => {
						setStyle(style.bgColor(random.color()));
					}}
				/>
				<Input
					label="Opacity"
					display={true}
					type="range"
					value={cells.bgOpacity}
					style={{ marginLeft: '3vmin' }}
					min="0"
					max="1"
					step="0.05"
					decimals="2"
					onChange={({ target: { value } }) =>
						setStyle(style.bgOpacity(value))
					}
					randomize={() => {
						setStyle(style.bgOpacity(random.opacity()));
					}}
				/>
			</div>
			{renderShadowControls()}
		</MenuSection>
	);
};

export default MenuSectionCells;
