export const getClockCapStyle = ({ style, type }) => {
	const options = style.clockCap[type];
	const { color, size, radius, zIndex } = options;

	return {
		position: 'absolute',
		top: `calc(50% - ${size / 2}vmin)`,
		left: `calc(50% - ${size / 2}vmin)`,
		width: `${size}vmin`,
		height: `${size}vmin`,
		backgroundColor: color,
		borderRadius: `${radius}%`,
		zIndex
	};
};
