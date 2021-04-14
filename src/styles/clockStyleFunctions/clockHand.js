import { defaultStyles } from './defaultStyles';

export const getClockHandStyle = ({ style, type, rotation }) => {
	const options = style[type];
	const { leaf, tail } = options;
	const {
		color: L_color,
		width: L_w,
		height: L_h,
		zIndex: L_zIndex,
		radius: L_radius
	} = leaf;
	const {
		color: T_color,
		width: T_w,
		height: T_h,
		zIndex: T_zIndex,
		radius: T_radius
	} = tail;
	return {
		leaf: {
			position: 'absolute',
			transformOrigin: 'bottom center',
			bottom: '50%',
			left: `calc(50% - ${L_w / 2}vmin)`,
			backgroundColor: L_color,
			boxShadow: '0 0 5px 1px rgba(0,0,0,0.1)',
			zIndex: L_zIndex,
			width: `${L_w}vmin`,
			height: `${L_h}vmin`,
			borderTopLeftRadius: `${L_radius}%`,
			borderTopRightRadius: `${L_radius}%`,
			transform: `rotate(${rotation}deg)`
		},
		tail: {
			position: 'absolute',
			transformOrigin: 'top center',
			top: '50%',
			left: `calc(50% - ${T_w / 2}vmin)`,
			backgroundColor: T_color,
			boxShadow: '0 0 5px 1px rgba(0,0,0,0.1)',
			zIndex: T_zIndex,
			width: `${T_w}vmin`,
			height: `${T_h}vmin`,
			borderBottomLeftRadius: `${T_radius}%`,
			borderBottomRightRadius: `${T_radius}%`,
			transform: `rotate(${rotation}deg)`
		}
	};
};

const setClockHandStyle = (
	{ type, scope, styles },
	currentStyles = defaultStyles
) => {
	const newStyles = currentStyles[type];
	switch (scope) {
		case 'leaf':
			newStyles.leaf = { ...newStyles.leaf, ...styles };
			break;
		case 'tail':
			newStyles.tail = { ...newStyles.tail, ...styles };
			break;
		case 'full':
			newStyles.leaf = { ...newStyles.leaf, ...styles };
			newStyles.tail = { ...newStyles.tail, ...styles };
			break;
		default:
			break;
	}
	return newStyles;
};

const hrHandLeaf = (styles, currentStyles) => {
	setClockHandStyle({ type: 'hrHand', scope: 'leaf', styles }, currentStyles);
};

const hrHandTail = (styles, currentStyles) => {
	setClockHandStyle({ type: 'hrHand', scope: 'tail', styles }, currentStyles);
};

const hrHandFull = (styles, currentStyles) => {
	setClockHandStyle({ type: 'hrHand', scope: 'full', styles }, currentStyles);
};

const mnHandLeaf = (styles, currentStyles) => {
	setClockHandStyle({ type: 'mnHand', scope: 'leaf', styles }, currentStyles);
};

const mnHandTail = (styles, currentStyles) => {
	setClockHandStyle({ type: 'mnHand', scope: 'tail', styles }, currentStyles);
};

const mnHandFull = (styles, currentStyles) => {
	setClockHandStyle({ type: 'mnHand', scope: 'full', styles }, currentStyles);
};

const scHandLeaf = (styles, currentStyles) => {
	setClockHandStyle({ type: 'scHand', scope: 'leaf', styles }, currentStyles);
};

const scHandTail = (styles, currentStyles) => {
	setClockHandStyle({ type: 'scHand', scope: 'tail', styles }, currentStyles);
};

const scHandFull = (styles, currentStyles) => {
	setClockHandStyle({ type: 'scHand', scope: 'full', styles }, currentStyles);
};

export const clockHandStyler = (currentStyles = defaultStyles) => {
	return {
		hrHand: {
			leaf: {
				color: value => hrHandLeaf({ color: value }, currentStyles),
				width: value => hrHandLeaf({ width: value }, currentStyles),
				length: value => hrHandLeaf({ height: value }, currentStyles),
				radius: value => hrHandLeaf({ radius: value }, currentStyles)
			},
			tail: {
				color: value => hrHandTail({ color: value }, currentStyles),
				width: value => hrHandTail({ width: value }, currentStyles),
				length: value => hrHandTail({ height: value }, currentStyles),
				radius: value => hrHandTail({ radius: value }, currentStyles)
			},
			full: {
				color: value => hrHandFull({ color: value }, currentStyles),
				width: value => hrHandFull({ width: value }, currentStyles),
				length: value => hrHandFull({ height: value }, currentStyles),
				radius: value => hrHandFull({ radius: value }, currentStyles)
			}
		},
		mnHand: {
			leaf: {
				color: value => mnHandLeaf({ color: value }, currentStyles),
				width: value => mnHandLeaf({ width: value }, currentStyles),
				length: value => mnHandLeaf({ height: value }, currentStyles),
				radius: value => mnHandLeaf({ radius: value }, currentStyles)
			},
			tail: {
				color: value => mnHandTail({ color: value }, currentStyles),
				width: value => mnHandTail({ width: value }, currentStyles),
				length: value => mnHandTail({ height: value }, currentStyles),
				radius: value => mnHandTail({ radius: value }, currentStyles)
			},
			full: {
				color: value => mnHandFull({ color: value }, currentStyles),
				width: value => mnHandFull({ width: value }, currentStyles),
				length: value => mnHandFull({ height: value }, currentStyles),
				radius: value => mnHandFull({ radius: value }, currentStyles)
			}
		},
		scHand: {
			leaf: {
				color: value => scHandLeaf({ color: value }, currentStyles),
				width: value => scHandLeaf({ width: value }, currentStyles),
				length: value => scHandLeaf({ height: value }, currentStyles),
				radius: value => scHandLeaf({ radius: value }, currentStyles)
			},
			tail: {
				color: value => scHandTail({ color: value }, currentStyles),
				width: value => scHandTail({ width: value }, currentStyles),
				length: value => scHandTail({ height: value }, currentStyles),
				radius: value => scHandTail({ radius: value }, currentStyles)
			},
			full: {
				color: value => scHandFull({ color: value }, currentStyles),
				width: value => scHandFull({ width: value }, currentStyles),
				length: value => scHandFull({ height: value }, currentStyles),
				radius: value => scHandFull({ radius: value }, currentStyles)
			}
		}
	};
};
