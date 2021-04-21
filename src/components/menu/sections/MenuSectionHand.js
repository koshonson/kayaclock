import React, { useContext } from 'react';
import { styleContext } from '../../../context';
import { clockHandStyler } from '../../../styles';
import { rgbToHex, hexToRgb, random } from '../../../util';

import MenuSection from './MenuSection';
import Input from '../../generic/Input';
import RandomButton from '../buttons/RandomButton';

const MenuSectionHand = ({ title, type }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const { [type]: style } = clockHandStyler(currentStyles);
	const { leaf, tail } = currentStyles[type];

	const renderSwapBtn = zIdx => {
		if (type === 'scHand') return <></>;
		return (
			<div
				className="swap-btn"
				onClick={() => setStyle(style.full.swap(zIdx))}
			>
				{zIdx === 10 ? 'Pull above' : 'Push below'}
			</div>
		);
	};

	return (
		<MenuSection title={title} type={type} randomize={style.full.random}>
			<div className="menu-section-content-block jc-sb">
				<Input
					className="color-input-rect"
					label="Color"
					display={false}
					type="color"
					value={rgbToHex(leaf.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.full.color(hexToRgb(value)))
					}
					randomize={() => {
						setStyle(style.full.color(random.color()));
					}}
				/>
				<Input
					label="Width"
					display={true}
					type="range"
					value={leaf.width}
					min="0"
					max="4"
					step="0.1"
					decimals="1"
					onChange={({ target: { value } }) =>
						setStyle(style.full.width(value))
					}
					randomize={() => {
						setStyle(style.full.width(random.tenthNum(0, 4)));
					}}
				/>
				<Input
					label="Length"
					display={true}
					type="range"
					min="5"
					max="49"
					step="1"
					value={leaf.height}
					onChange={({ target: { value } }) =>
						setStyle(style.leaf.length(value))
					}
					randomize={() => {
						setStyle(style.leaf.length(random.wholeNum(5, 49)));
					}}
				/>
				{renderSwapBtn(leaf.zIndex)}
			</div>
			<div style={{ display: 'flex' }}>
				<label className="menu-section-content-label">Leaf</label>
				<RandomButton
					randomize={style.leaf.random}
					size="8"
					style={{ margin: '0 0 .25vmin .5vmin' }}
					yShift="-50"
				/>
			</div>
			<div className="menu-section-content-block jc-sb">
				<Input
					label="Color"
					display={false}
					type="color"
					className="color-input-circle"
					value={rgbToHex(leaf.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.leaf.color(hexToRgb(value)))
					}
					randomize={() => {
						setStyle(style.leaf.color(random.color()));
					}}
				/>
				<Input
					label="Width"
					display={true}
					type="range"
					value={leaf.width}
					min="0"
					max="4"
					step="0.1"
					decimals="1"
					onChange={({ target: { value } }) =>
						setStyle(style.leaf.width(value))
					}
					randomize={() => {
						setStyle(style.leaf.width(random.tenthNum(0, 4)));
					}}
				/>
				<Input
					label="Length"
					display={true}
					type="range"
					min="5"
					max="49"
					step="1"
					value={leaf.height}
					onChange={({ target: { value } }) =>
						setStyle(style.leaf.length(value))
					}
					randomize={() => {
						setStyle(style.leaf.length(random.wholeNum(5, 49)));
					}}
				/>
				<Input
					label="Radius"
					display={true}
					type="range"
					min="0"
					max="50"
					step="5"
					value={leaf.radius}
					onChange={({ target: { value } }) =>
						setStyle(style.leaf.radius(value))
					}
					randomize={() => {
						setStyle(style.leaf.radius(random.radius()));
					}}
				/>
			</div>
			<div style={{ display: 'flex' }}>
				<label className="menu-section-content-label">Tail</label>
				<RandomButton
					randomize={style.tail.random}
					size="8"
					style={{ margin: '0 0 .25vmin .5vmin' }}
					yShift="-50"
				/>
			</div>

			<div className="menu-section-content-block jc-sb">
				<Input
					label="Color"
					display={false}
					type="color"
					className="color-input-circle"
					value={rgbToHex(tail.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.tail.color(hexToRgb(value)))
					}
					randomize={() => {
						setStyle(style.tail.color(random.color()));
					}}
				/>
				<Input
					label="Width"
					display={true}
					type="range"
					value={tail.width}
					min="0"
					max="4"
					step="0.1"
					decimals="1"
					onChange={({ target: { value } }) =>
						setStyle(style.tail.width(value))
					}
					randomize={() => {
						setStyle(style.tail.width(random.tenthNum(0, 4)));
					}}
				/>
				<Input
					label="Length"
					display={true}
					type="range"
					min="1"
					max="24"
					step="1"
					value={tail.height}
					onChange={({ target: { value } }) =>
						setStyle(style.tail.length(value))
					}
					randomize={() => {
						setStyle(style.tail.length(random.halfNum(1, 24)));
					}}
				/>
				<Input
					label="Radius"
					display={true}
					type="range"
					min="0"
					max="50"
					step="5"
					value={tail.radius}
					onChange={({ target: { value } }) =>
						setStyle(style.tail.radius(value))
					}
					randomize={() => {
						setStyle(style.tail.radius(random.radius()));
					}}
				/>
			</div>
		</MenuSection>
	);
};

export default MenuSectionHand;
