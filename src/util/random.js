const randomNum = (from, to) => {
	return from + Math.floor(Math.random() * (to - from + 1));
};

const get16BitNum = (from = 0, to = 255) => {
	return randomNum(from, to);
};

const randomRgbColor = () => {
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
