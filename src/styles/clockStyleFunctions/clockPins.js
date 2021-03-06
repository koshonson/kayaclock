import { random } from '../../util';

const getVminValue = value => `${value}vmin`;
const getPctValue = value => `${value}%`;
const getOffsetValue = offset => getVminValue(0 - offset);
const placeCenterPin = ({ width }) => `calc(50% - ${width / 2}vmin)`;
const getRadiusProperty = position => `border${position}Radius`;

const placeLeftPinDouble = ({ width, gap }) =>
	`calc(50% - ${width / 2}vmin - ${gap}vmin)`;
const placeRightPinDouble = ({ width, gap }) =>
	`calc(50% - ${width / 2}vmin + ${gap}vmin)`;
const placeLeftPinTriple = ({ width, gap }) =>
	`calc(50% - ${width / 2}vmin - ${width + gap}vmin)`;
const placeRightPinTriple = ({ width, gap }) =>
	`calc(50% - ${width / 2}vmin + ${width + gap}vmin)`;

const TYPE_POSITIONS = {
	top: { top: 0, left: 1 },
	left: { top: 1, left: 0 },
	right: { top: 1, right: 0 },
	bottom: { bottom: 0, left: 1 }
};

const getPositionParamsByType = type => {
	const options = TYPE_POSITIONS[type];
	const keys = Object.keys(options);
	return (main, offset) => {
		return keys.reduce((a, v) => {
			a[v] = options[v] ? main : offset;
			return a;
		}, {});
	};
};

// opts Object expects {width, gap} shape (just {width} for the centerPin)
const getPositionByType = type => {
	const setPositionParams = getPositionParamsByType(type);
	return {
		placeCenterPin: (main, offset) =>
			setPositionParams(placeCenterPin(main), offset),
		placeLeftPinDouble: (main, offset) =>
			setPositionParams(placeLeftPinDouble(main), offset),
		placeRightPinDouble: (main, offset) =>
			setPositionParams(placeRightPinDouble(main), offset),
		placeLeftPinTriple: (main, offset) =>
			setPositionParams(placeLeftPinTriple(main), offset),
		placeRightPinTriple: (main, offset) =>
			setPositionParams(placeRightPinTriple(main), offset)
	};
};

const positionGetter = ({ type, numPins }) => {
	const getPositionStyles = getPositionByType(type);
	switch (numPins) {
		case 1:
			return [
				({ width }, offset) =>
					getPositionStyles.placeCenterPin({ width }, offset)
			];
		case 2:
			return [
				(opts, offset) => getPositionStyles.placeLeftPinDouble(opts, offset),
				(opts, offset) => getPositionStyles.placeRightPinDouble(opts, offset)
			];
		default:
			return [
				(opts, offset) => getPositionStyles.placeLeftPinTriple(opts, offset),
				(opts, offset) => getPositionStyles.placeCenterPin(opts, offset),
				(opts, offset) => getPositionStyles.placeRightPinTriple(opts, offset)
			];
	}
};

const getDimensionsByType = type => {
	return ({ width, length }) => {
		if (type === 'left' || type === 'right') {
			return { width: getVminValue(length), height: getVminValue(width) };
		}
		return { width: getVminValue(width), height: getVminValue(length) };
	};
};

const TYPE_RADIUS = {
	top: { inner: ['BottomLeft', 'BottomRight'], outer: ['TopLeft', 'TopRight'] },
	left: { inner: ['TopRight', 'BottomRight'], outer: ['TopLeft', 'BottomLeft'] },
	right: { inner: ['TopLeft', 'BottomLeft'], outer: ['TopRight', 'BottomRight'] },
	bottom: { inner: ['TopLeft', 'TopRight'], outer: ['BottomLeft', 'BottomRight'] }
};

const getRadiusByType = type => {
	const options = TYPE_RADIUS[type];
	return ({ innerRadius, outerRadius }) => {
		return ['inner', 'outer'].reduce((a, v) => {
			options[v].forEach(radius => {
				a[getRadiusProperty(radius)] =
					v === 'inner'
						? getPctValue(innerRadius)
						: getPctValue(outerRadius);
			});
			return a;
		}, {});
	};
};

export const getClockPinsStyle = ({ type, style, numPins, pinIdx }) => {
	const getDimensionStyles = getDimensionsByType(type);
	const getRadiusStyles = getRadiusByType(type);
	const getPositionStyles = positionGetter({ type, numPins });

	const { width, length, gap, color, innerRadius, outerRadius, offset } = style;

	const baseStyles = {
		position: 'absolute',
		zIndex: 5,
		backgroundColor: color
	};
	const dimensionStyles = getDimensionStyles({ width, length });
	const positionStyles = getPositionStyles[pinIdx](
		{ width, gap },
		getOffsetValue(offset)
	);
	const radiusStyles = getRadiusStyles({ innerRadius, outerRadius });

	return { ...baseStyles, ...dimensionStyles, ...positionStyles, ...radiusStyles };
};

const randomizePin = () => {
	const length = random.halfNum(0, 20);
	const width = random.halfNum(0, 3);
	return {
		length,
		width,
		color: random.color(),
		gap: random.halfNum(0, 4),
		offset: random.wholeNum(0, width),
		innerRadius: random.radius(),
		outerRadius: random.radius()
	};
};

const randomizePinsInCell = (type, currentStyles) => {
	const newStyles = { ...currentStyles };
	newStyles.clockPins[type] = [];
	const newPin = randomizePin();
	const numPins = random.wholeNum(0, 3);
	for (let i = 0; i < numPins; i++) {
		newStyles.clockPins[type].push(newPin);
	}
	newStyles.defaultPin = newPin;
	return newStyles;
};

const randomizePinsInBatch = currentStyles => {
	return ['top', 'left', 'right', 'bottom'].reduce(
		(styles, type) => {
			return randomizePinsInCell(type, styles);
		},
		{ ...currentStyles }
	);
};

const setClockPinsStyle = ({ type, pinIdx, styles }, currentStyles) => {
	const newStyles = { ...currentStyles.clockPins };
	const currentPins = [...newStyles[type]];
	const newPins = currentPins.map((pin, i) => {
		if (i !== pinIdx) return pin;
		return { ...pin, ...styles };
	});
	newStyles[type] = newPins;
	return {
		clockPins: {
			...newStyles
		},
		defaultPin: {
			...newStyles[type][pinIdx],
			...styles
		}
	};
};

const STYLE_PARAMS = [
	'color',
	'width',
	'length',
	'gap',
	'offset',
	'innerRadius',
	'outerRadius'
];

const singlePinStyler = ({ type, pinIdx }, currentStyles) => {
	const styler = STYLE_PARAMS.reduce((a, v) => {
		a[v] = value => {
			value = v !== 'color' ? +value : value;
			return setClockPinsStyle(
				{ type, pinIdx, styles: { [v]: value } },
				currentStyles
			);
		};
		return a;
	}, {});
	styler.random = () => {
		return randomizePinsInCell(type, currentStyles);
	};
	return styler;
};

const pinsInCellStyler = ({ type }, currentStyles) => {
	const styler = STYLE_PARAMS.reduce((a, v) => {
		a[v] = value => {
			value = v !== 'color' ? +value : value;
			return currentStyles.clockPins[type].reduce(
				(updatedStyles, pin, pinIdx) => {
					const clockPins = setClockPinsStyle(
						{ type, pinIdx, styles: { [v]: value } },
						updatedStyles
					);
					return { ...updatedStyles, ...clockPins };
				},
				{ ...currentStyles }
			);
		};
		return a;
	}, {});
	styler.random = () => {
		return randomizePinsInCell(type, currentStyles);
	};
	return styler;
};

const batchPinStyler = currentStyles => {
	const styler = STYLE_PARAMS.reduce((a, v) => {
		a[v] = value => {
			value = v !== 'color' ? +value : value;
			return ['top', 'left', 'right', 'bottom'].reduce(
				(updatedStyles, cell) => {
					const cellStyler = pinsInCellStyler(
						{ type: cell },
						updatedStyles
					);
					return cellStyler[v](value);
				},
				{ ...currentStyles }
			);
		};
		return a;
	}, {});
	styler.random = () => {
		return randomizePinsInBatch(currentStyles);
	};
	return styler;
};

export const clockPinStyler = ({ type, pinIdx }, currentStyles) => {
	if (type === 'batch') {
		return batchPinStyler(currentStyles);
	} else {
		if (pinIdx === 3) {
			return pinsInCellStyler({ type }, currentStyles);
		}
		return singlePinStyler({ type, pinIdx }, currentStyles);
	}
};
