export const combineColorTransparency = (color, opacity) => {
	const [a, b, c] = color.match(/\d/g);
	return `rgba(${a}, ${b}, ${c}, ${opacity})`;
};
