import React from 'react';
import { rgbToHex, hexToRgb } from '../../util';

const ColorGradient = ({ label, colors, setCanvasBg, setStyle }) => {
	return (
		<div className="input-block">
			<label>{label}</label>
			<div>
				<input
					type="color"
					className="color-input-rect"
					value={rgbToHex(colors.bgColorPrimary)}
					onChange={({ target: { value } }) => {
						setStyle(setCanvasBg.primary(hexToRgb(value)));
					}}
				/>
				<input
					type="color"
					className="color-input-rect"
					value={rgbToHex(colors.bgColorSecondary)}
					onChange={({ target: { value } }) => {
						setStyle(setCanvasBg.secondary(hexToRgb(value)));
					}}
				/>
			</div>
		</div>
	);
};

export default ColorGradient;
