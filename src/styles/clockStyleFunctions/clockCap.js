import { defaultStyles } from './defaultStyles';
import { random } from '../../util';

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

const randomSnap = () => {
	const SNAPS = {
		1: null,
		2: 'hr',
		3: 'mn',
		4: 'sc'
	};
	const snap = SNAPS[random.wholeNum(1, 4)];
	return snap;
};

export const randomCap = maxSize => {
	return {
		color: random.color(),
		size: random.wholeNum(0, maxSize),
		radius: random.radius(),
		snap: randomSnap(),
		rotation: random.bool()
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
			},
			random: () => {
				return setInnerClockCapStyle(randomCap(19), currentStyles);
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
				const { rotation } = currentStyles.clockCap.outer;
				return setOuterClockCapStyle({ rotation: !rotation }, currentStyles);
			},
			random: () => {
				return setOuterClockCapStyle(randomCap(20), currentStyles);
			}
		}
	};
};
