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
	newStyles[type] = { ...newStyles[type], ...styles };
	return newStyles;
};

const setInnerClockCapStyle = (styles, currentStyles) => {
	return setClockCapStyle({ type: 'inner', styles }, currentStyles);
};

const setOuterClockCapStyle = (styles, currentStyles) => {
	return setClockCapStyle({ type: 'outer', styles }, currentStyles);
};

export const clockCapStyler = (currentStyles = defaultStyles) => {
	return {
		inner: {
			color: color => setInnerClockCapStyle({ color }, currentStyles),
			size: size => setInnerClockCapStyle({ size }, currentStyles),
			radius: radius => setInnerClockCapStyle({ radius }, currentStyles),
			snap: value => {
				const snap = value === 'null' ? null : value;
				return setInnerClockCapStyle({ snap }, currentStyles);
			},
			zIndex: zIndex => setInnerClockCapStyle({ zIndex }, currentStyles),
			rotation: () => {
				const { rotation } = currentStyles.clockCap.inner;
				return setInnerClockCapStyle({ rotation: !rotation }, currentStyles);
			}
		},
		outer: {
			color: color => setOuterClockCapStyle({ color }, currentStyles),
			size: size => setOuterClockCapStyle({ size }, currentStyles),
			radius: radius => setOuterClockCapStyle({ radius }, currentStyles),
			snap: value => {
				const snap = value === 'null' ? null : value;
				return setOuterClockCapStyle({ snap }, currentStyles);
			},
			zIndex: zIndex => setOuterClockCapStyle({ zIndex }, currentStyles),
			rotation: () => {
				const { rotation } = currentStyles.clockCap.inner;
				return setOuterClockCapStyle({ rotation: !rotation }, currentStyles);
			}
		}
	};
};
