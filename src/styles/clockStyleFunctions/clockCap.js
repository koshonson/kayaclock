import { defaultStyles } from './defaultStyles';

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

const setClockCapStyle = ({ type, styles }, currentStyles) => {
	const newStyles = currentStyles.clockCap;
	switch (type) {
		case 'inner':
			newStyles.inner = { ...newStyles.inner, ...styles };
			break;
		case 'outer':
			newStyles.outer = { ...newStyles.outer, ...styles };
			break;
		default:
			break;
	}
	return newStyles;
};

const setInnerClockCapStyle = (styles, currentStyles) => {
	setClockCapStyle({ type: 'inner', styles }, currentStyles);
};

const setOuterClockCapStyle = (styles, currentStyles) => {
	setClockCapStyle({ type: 'outer', styles }, currentStyles);
};

export const clockCapStyler = (currentStyles = defaultStyles) => {
	return {
		inner: {
			color: value => setInnerClockCapStyle({ color: value }, currentStyles),
			size: value => setInnerClockCapStyle({ size: value }, currentStyles),
			radius: value => setInnerClockCapStyle({ radius: value }, currentStyles)
		},
		outer: {
			color: value => setOuterClockCapStyle({ color: value }, currentStyles),
			size: value => setOuterClockCapStyle({ size: value }, currentStyles),
			radius: value => setOuterClockCapStyle({ radius: value }, currentStyles)
		}
	};
};
