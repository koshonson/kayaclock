import { random } from '../../util';

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

const randomHand = {
	leaf: () => {
		return {
			color: random.color(),
			width: random.tenthNum(0, 4),
			height: random.wholeNum(5, 49),
			radius: random.radius()
		};
	},
	tail: () => {
		return {
			color: random.color(),
			width: random.tenthNum(0, 4),
			height: random.wholeNum(0, 24),
			radius: random.radius()
		};
	},
	full: () => {
		const color = random.color();
		const tailLength = random.wholeNum(1, 10);
		return {
			leaf: {
				color,
				height: random.wholeNum(tailLength + 5, 49),
				width: random.wholeNum(2, 40) / 10,
				radius: random.radius()
			},
			tail: {
				color,
				height: tailLength,
				width: random.wholeNum(2, 40) / 10,
				radius: random.radius()
			}
		};
	}
};

const setClockHandStyle = ({ type, scope, styles }, currentStyles) => {
	const newStyles = { ...currentStyles[type] };
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
	console.log({ ...currentStyles, [type]: { ...newStyles } });
	return { [type]: { ...newStyles } };
};

const hrHandLeaf = (styles, currentStyles) => {
	return setClockHandStyle(
		{ type: 'hrHand', scope: 'leaf', styles },
		currentStyles
	);
};

const hrHandTail = (styles, currentStyles) => {
	return setClockHandStyle(
		{ type: 'hrHand', scope: 'tail', styles },
		currentStyles
	);
};

const hrHandFull = (styles, currentStyles) => {
	return setClockHandStyle(
		{ type: 'hrHand', scope: 'full', styles },
		currentStyles
	);
};

const mnHandLeaf = (styles, currentStyles) => {
	return setClockHandStyle(
		{ type: 'mnHand', scope: 'leaf', styles },
		currentStyles
	);
};

const mnHandTail = (styles, currentStyles) => {
	return setClockHandStyle(
		{ type: 'mnHand', scope: 'tail', styles },
		currentStyles
	);
};

const mnHandFull = (styles, currentStyles) => {
	return setClockHandStyle(
		{ type: 'mnHand', scope: 'full', styles },
		currentStyles
	);
};

const scHandLeaf = (styles, currentStyles) => {
	return setClockHandStyle(
		{ type: 'scHand', scope: 'leaf', styles },
		currentStyles
	);
};

const scHandTail = (styles, currentStyles) => {
	return setClockHandStyle(
		{ type: 'scHand', scope: 'tail', styles },
		currentStyles
	);
};

const scHandFull = (styles, currentStyles) => {
	return setClockHandStyle(
		{ type: 'scHand', scope: 'full', styles },
		currentStyles
	);
};

export const clockHandStyler = currentStyles => {
	return {
		hrHand: {
			leaf: {
				color: value => hrHandLeaf({ color: value }, currentStyles),
				width: value => hrHandLeaf({ width: value }, currentStyles),
				length: value => hrHandLeaf({ height: value }, currentStyles),
				radius: value => hrHandLeaf({ radius: value }, currentStyles),
				random: () => hrHandLeaf(randomHand.leaf(), currentStyles)
			},
			tail: {
				color: value => hrHandTail({ color: value }, currentStyles),
				width: value => hrHandTail({ width: value }, currentStyles),
				length: value => hrHandTail({ height: value }, currentStyles),
				radius: value => hrHandTail({ radius: value }, currentStyles),
				random: () => hrHandTail(randomHand.tail(), currentStyles)
			},
			full: {
				color: value => hrHandFull({ color: value }, currentStyles),
				width: value => hrHandFull({ width: value }, currentStyles),
				length: value => hrHandFull({ height: value }, currentStyles),
				radius: value => hrHandFull({ radius: value }, currentStyles),
				swap: zIdx => {
					const zIndex = zIdx === 10 ? 20 : 10;
					hrHandFull({ zIndex }, currentStyles);
					mnHandFull({ zIndex: zIdx }, currentStyles);
				},
				random: () => {
					const { leaf, tail } = randomHand.full();
					const newLeaf = hrHandLeaf(leaf, currentStyles);
					return hrHandTail(tail, newLeaf);
				}
			}
		},
		mnHand: {
			leaf: {
				color: value => mnHandLeaf({ color: value }, currentStyles),
				width: value => mnHandLeaf({ width: value }, currentStyles),
				length: value => mnHandLeaf({ height: value }, currentStyles),
				radius: value => mnHandLeaf({ radius: value }, currentStyles),
				random: () => mnHandLeaf(randomHand.leaf(), currentStyles)
			},
			tail: {
				color: value => mnHandTail({ color: value }, currentStyles),
				width: value => mnHandTail({ width: value }, currentStyles),
				length: value => mnHandTail({ height: value }, currentStyles),
				radius: value => mnHandTail({ radius: value }, currentStyles),
				random: () => mnHandTail(randomHand.tail(), currentStyles)
			},
			full: {
				color: value => mnHandFull({ color: value }, currentStyles),
				width: value => mnHandFull({ width: value }, currentStyles),
				length: value => mnHandFull({ height: value }, currentStyles),
				radius: value => mnHandFull({ radius: value }, currentStyles),
				swap: zIdx => {
					const zIndex = zIdx === 10 ? 20 : 10;
					const newStyles = mnHandFull({ zIndex: zIndex }, currentStyles);
					return hrHandFull({ zIndex: zIdx }, newStyles);
				},
				random: () => {
					const { leaf, tail } = randomHand.full();
					const newLeaf = mnHandLeaf(leaf, currentStyles);
					return mnHandTail(tail, newLeaf);
				}
			}
		},
		scHand: {
			leaf: {
				color: value => scHandLeaf({ color: value }, currentStyles),
				width: value => scHandLeaf({ width: value }, currentStyles),
				length: value => scHandLeaf({ height: value }, currentStyles),
				radius: value => scHandLeaf({ radius: value }, currentStyles),
				random: () => scHandLeaf(randomHand.leaf(), currentStyles)
			},
			tail: {
				color: value => scHandTail({ color: value }, currentStyles),
				width: value => scHandTail({ width: value }, currentStyles),
				length: value => scHandTail({ height: value }, currentStyles),
				radius: value => scHandTail({ radius: value }, currentStyles),
				random: () => scHandTail(randomHand.tail(), currentStyles)
			},
			full: {
				color: value => scHandFull({ color: value }, currentStyles),
				width: value => scHandFull({ width: value }, currentStyles),
				length: value => scHandFull({ height: value }, currentStyles),
				radius: value => scHandFull({ radius: value }, currentStyles),
				random: () => {
					const { leaf, tail } = randomHand.full();
					const newLeaf = scHandLeaf(leaf, currentStyles);
					return scHandTail(tail, newLeaf);
				}
			}
		}
	};
};
