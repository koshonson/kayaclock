import React, { useContext } from 'react';
import { styleContext } from '../../../context';
import { clockCapStyler } from '../../../styles';
import { rgbToHex, hexToRgb } from '../../../util';

import MenuSection from './MenuSection';
import Input from '../../generic/Input';
import Select from '../../generic/Select';

const MenuSectionCap = ({ title, type }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const style = clockCapStyler(currentStyles);
	const { inner, outer } = currentStyles.clockCap;

	const renderSnapAndRotate = ({ type, radius, rotation }) => {
		if (radius > 40) return <></>;
		return (
			<>
				<Select
					label="Snap to"
					onChange={({ target: { value } }) =>
						setStyle(style[type].snap(value))
					}
				/>
				<Input
					label="Rotate"
					type="checkbox"
					checked={rotation}
					onChange={() => setStyle(style[type].rotation())}
				/>
			</>
		);
	};

	return (
		<MenuSection title={title} type={type}>
			<label>Inner</label>
			<div className="menu-section-content-block jc-sb">
				<Input
					label="Color"
					display={false}
					type="color"
					className="color-input-rect"
					value={rgbToHex(inner.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.inner.color(hexToRgb(value)))
					}
				/>
				<Input
					label="Size"
					display={true}
					type="range"
					value={inner.size}
					min="0"
					max="20"
					step="0.5"
					onChange={({ target: { value } }) =>
						setStyle(style.inner.size(value))
					}
				/>
				<Input
					label="Radius"
					display={true}
					type="range"
					min="0"
					max="50"
					step="5"
					value={inner.radius}
					onChange={({ target: { value } }) =>
						setStyle(style.inner.radius(value))
					}
				/>
			</div>
			<div
				className="menu-section-content-block jc-sb"
				style={{ marginTop: '1vmin' }}
			>
				<Input
					label="Vertical placement"
					type="range"
					value={inner.zIndex}
					min="5"
					max="35"
					step="10"
					onChange={({ target: { value } }) =>
						setStyle(style.inner.zIndex(+value))
					}
				/>
				{renderSnapAndRotate({
					type: 'inner',
					radius: inner.radius,
					rotation: inner.rotation
				})}
			</div>
			<label>Outer</label>
			<div className="menu-section-content-block jc-sb">
				<Input
					label="Color"
					display={false}
					type="color"
					className="color-input-rect"
					value={rgbToHex(outer.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.outer.color(hexToRgb(value)))
					}
				/>
				<Input
					label="Size"
					display={true}
					type="range"
					value={outer.size}
					min="0"
					max="20"
					step="0.5"
					onChange={({ target: { value } }) =>
						setStyle(style.outer.size(value))
					}
				/>
				<Input
					label="Radius"
					display={true}
					type="range"
					min="0"
					max="50"
					step="5"
					value={outer.radius}
					onChange={({ target: { value } }) =>
						setStyle(style.outer.radius(value))
					}
				/>
			</div>
			<div
				className="menu-section-content-block jc-sb"
				style={{ marginTop: '1vmin' }}
			>
				<Input
					label="Vertical placement"
					type="range"
					value={outer.zIndex}
					min="5"
					max="35"
					step="10"
					onChange={({ target: { value } }) =>
						setStyle(style.outer.zIndex(+value))
					}
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
