import { get16BitNum } from './random';

export const combineColorTransparency = (color, opacity) => {
	const [a, b, c] = color.match(/\d+/g);
	return `rgba(${a}, ${b}, ${c}, ${opacity})`;
};

export const rgbToHex = rgbColor => {
	const colors = rgbColor.match(/\d+/g);
	const hexRaw = colors.map(color => Number(color).toString(16));
	const hexDd = hexRaw.map(hex => (hex.length === 1 ? '0' + hex : hex));
	const hexCode = hexDd.join('');
	return `#${hexCode}`;
};

export const hexToRgb = hexColor => {
	const hexNums = [
		hexColor.slice(1, 3),
		hexColor.slice(3, 5),
		hexColor.slice(5, 7)
	];
	const decimals = hexNums.map(num => parseInt(num, 16));
	return `rgb(${decimals.join(',')})`;
};
export const randomRgbColor = () => {
	const colors = [];
	for (let i = 0; i < 3; i++) {
		colors.push(get16BitNum());
	}
	return `rgb(${colors.join(',')})`;
};

const parseRgbColors = rgbColor => {
	return rgbColor.match(/\d+/g);
};

export const lightenColor = (rgbColor, level = 30) => {
	const colors = parseRgbColors(rgbColor);
	const lightened = colors.map(color => {
		return +color <= 255 - level ? +color + level : 255;
	});
	return `rgb(${lightened.join(',')})`;
};

export const getContrastBaseColor = rgbColor => {
	const colors = parseRgbColors(rgbColor);
	const avgColor = colors.reduce((a, v) => Math.floor(+v / 3) + a, 0);
	return avgColor > 100 ? 'rgba(0,0,0,0.7)' : 'rgba(255, 255, 255, 0.7)';
};
