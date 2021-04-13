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
