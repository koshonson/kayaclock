import React, { useContext } from 'react';
import { styleContext } from '../../context';
import { clockCapStyler } from '../../styles';
import { rgbToHex, hexToRgb } from '../../util';

import MenuSection from './MenuSection';
import Input from '../generic/Input';

const MenuSectionCap = ({ title, type }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const style = clockCapStyler(currentStyles);
	const { inner, outer } = currentStyles.clockCap;

	return (
		<MenuSection title={title} type={type}>
			<div className="menu-section-content-block-label">Inner:</div>
			<div className="menu-section-content-block">
				<Input
					label="Color"
					display={false}
					type="color"
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
			<div className="menu-section-content-block-label">Outer:</div>
			<div className="menu-section-content-block">
				<Input
					label="Color"
					display={false}
					type="color"
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
					max="25"
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
		</MenuSection>
	);
};

export default MenuSectionCap;
