import React, { useContext } from 'react';
import { styleContext } from '../../context';
import { clockHandStyler } from '../../styles';
import { rgbToHex, hexToRgb } from '../../util';

import MenuSection from './MenuSection';
import Input from '../generic/Input';

const MenuSectionHand = ({ title, type }) => {
	const { style: currentStyles, setStyle } = useContext(styleContext);
	const { [type]: style } = clockHandStyler(currentStyles);
	const { leaf, tail } = currentStyles[type];

	return (
		<MenuSection title={title} type={type}>
			<div className="menu-section-content-block">
				<Input
					className="color"
					label="Color"
					display={false}
					type="color"
					value={rgbToHex(leaf.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.full.color(hexToRgb(value)))
					}
				/>
				<Input
					label="Width"
					display={true}
					type="range"
					value={leaf.width}
					min="0.2"
					max="4"
					step="0.1"
					onChange={({ target: { value } }) =>
						setStyle(style.full.width(value))
					}
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
				/>
			</div>
			<div className="menu-section-content-block-label">Leaf:</div>
			<div className="menu-section-content-block">
				<Input
					label="Color"
					display={false}
					type="color"
					value={rgbToHex(leaf.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.leaf.color(hexToRgb(value)))
					}
				/>
				<Input
					label="Width"
					display={true}
					type="range"
					value={leaf.width}
					min="0.2"
					max="4"
					step="0.1"
					onChange={({ target: { value } }) =>
						setStyle(style.leaf.width(value))
					}
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
				/>
			</div>
			<div className="menu-section-content-block-label">Tail:</div>
			<div className="menu-section-content-block">
				<Input
					label="Color"
					display={false}
					type="color"
					value={rgbToHex(tail.color)}
					onChange={({ target: { value } }) =>
						setStyle(style.tail.color(hexToRgb(value)))
					}
				/>
				<Input
					label="Width"
					display={true}
					type="range"
					value={tail.width}
					min="0.2"
					max="4"
					step="0.1"
					onChange={({ target: { value } }) =>
						setStyle(style.tail.width(value))
					}
				/>
				<Input
					label="Length"
					display={true}
					type="range"
					min="1"
					max="24"
					step="0.5"
					value={tail.height}
					onChange={({ target: { value } }) =>
						setStyle(style.tail.length(value))
					}
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
				/>
			</div>
		</MenuSection>
	);
};

export default MenuSectionHand;
