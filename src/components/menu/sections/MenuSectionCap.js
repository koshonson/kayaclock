import React, { useContext } from 'react';
import { styleContext, menuContext } from '../../../context';
import { clockCapStyler, LABELS } from '../../../styles';
import { rgbToHex, hexToRgb, random } from '../../../util';

import MenuSection from './MenuSection';
import Input from '../../generic/Input';
import Select from '../../generic/Select';
import RandomButton from '../buttons/RandomButton';

const MenuSectionCap = ({ title, type }) => {
	const { lang } = useContext(menuContext);
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const style = clockCapStyler(currentStyles);
	const { inner, outer } = currentStyles.clockCap;
	const { generic: labels } = LABELS;
	const {
		blocks: blockLabels,
		zIdxRange: zIdxLabel,
		snap: snapLabel,
		rotate: rotateLabel
	} = LABELS.sections.cap;

	const renderSnapAndRotate = ({ type, radius, rotation }) => {
		if (radius > 40) return <></>;
		return (
			<>
				<Select
					label={snapLabel[lang]}
					lang={lang}
					onChange={({ target: { value } }) =>
						setStyle(style[type].snap(value))
					}
				/>
				<Input
					label={rotateLabel[lang]}
					type="checkbox"
					checked={rotation}
					onChange={() => setStyle(style[type].rotation())}
				/>
			</>
		);
	};

	return (
		<MenuSection title={title} type={type}>
			<div style={{ display: 'flex' }}>
				<label className="menu-section-content-label">
					{blockLabels.inner[lang]}
				</label>
				<RandomButton
					randomize={style.inner.random}
					size="8"
					style={{ margin: '0 0 .25vmin .5vmin' }}
					yShift="-50"
				/>
			</div>
			<div className="menu-section-content-block jc-sb">
				<Input
					label={labels.color[lang]}
					display={false}
					type="color"
					className="color-input-rect"
					value={rgbToHex(inner.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.inner.color(hexToRgb(value)))
					}
					randomize={() => {
						setStyle(style.inner.color(random.color()));
					}}
				/>
				<Input
					label={labels.size[lang]}
					display={true}
					type="range"
					value={inner.size}
					min="0"
					max="20"
					step="0.5"
					decimals="1"
					onChange={({ target: { value } }) =>
						setStyle(style.inner.size(value))
					}
					randomize={() => {
						setStyle(style.inner.size(random.halfNum(0, 20)));
					}}
				/>
				<Input
					label={labels.radius[lang]}
					display={true}
					type="range"
					min="0"
					max="50"
					step="1"
					value={inner.radius}
					onChange={({ target: { value } }) =>
						setStyle(style.inner.radius(value))
					}
					randomize={() => {
						setStyle(style.inner.radius(random.radius()));
					}}
				/>
			</div>
			<div
				className="menu-section-content-block jc-sb"
				style={{ marginTop: '1vmin' }}
			>
				<Input
					label={zIdxLabel[lang]}
					type="range"
					value={inner.zIndex}
					min="5"
					max="35"
					step="10"
					onChange={({ target: { value } }) =>
						setStyle(style.inner.zIndex(+value))
					}
					randomize={() => {
						setStyle(style.inner.zIndex(random.zInxCap()));
					}}
				/>
				{renderSnapAndRotate({
					type: 'inner',
					radius: inner.radius,
					rotation: inner.rotation
				})}
			</div>
			<div style={{ display: 'flex' }}>
				<label className="menu-section-content-label">
					{blockLabels.outer[lang]}
				</label>
				<RandomButton
					randomize={style.outer.random}
					size="8"
					style={{ margin: '0 0 .25vmin .5vmin' }}
					yShift="-50"
				/>
			</div>
			<div className="menu-section-content-block jc-sb">
				<Input
					label={labels.color[lang]}
					display={false}
					type="color"
					className="color-input-rect"
					value={rgbToHex(outer.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.outer.color(hexToRgb(value)))
					}
					randomize={() => {
						setStyle(style.outer.color(random.color()));
					}}
				/>
				<Input
					label={labels.size[lang]}
					display={true}
					type="range"
					value={outer.size}
					min="0"
					max="20"
					step="0.5"
					decimals="1"
					onChange={({ target: { value } }) =>
						setStyle(style.outer.size(value))
					}
					randomize={() => {
						setStyle(style.outer.size(random.halfNum(0, 20)));
					}}
				/>
				<Input
					label={labels.radius[lang]}
					display={true}
					type="range"
					min="0"
					max="50"
					step="1"
					value={outer.radius}
					onChange={({ target: { value } }) =>
						setStyle(style.outer.radius(value))
					}
					randomize={() => {
						setStyle(style.outer.radius(random.radius()));
					}}
				/>
			</div>
			<div
				className="menu-section-content-block jc-sb"
				style={{ marginTop: '1vmin' }}
			>
				<Input
					label={zIdxLabel[lang]}
					type="range"
					value={outer.zIndex}
					min="5"
					max="35"
					step="10"
					onChange={({ target: { value } }) =>
						setStyle(style.outer.zIndex(+value))
					}
					randomize={() => {
						setStyle(style.outer.zIndex(random.zInxCap()));
					}}
				/>
				{renderSnapAndRotate({
					type: 'outer',
					radius: outer.radius,
					rotation: outer.rotation
				})}
			</div>
		</MenuSection>
	);
};

export default MenuSectionCap;
