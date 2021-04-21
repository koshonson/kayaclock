import { defaultStyles } from './defaultStyles';
import { random, lightenColor } from '../../util';
import { randomCap } from './clockCap';
import { CELLS } from '../../hooks';

const enableHands = () => {
	return {
		hr: 1,
		mn: 1,
		sc: random.wholeNum(0, 1)
	};
};

const randomHand = (color, width) => {
	const tailLength = random.wholeNum(1, 10);
	const radius = random.radius();
	return {
		tame: () => {
			return {
				leaf: {
					color,
					width,
					radius,
					height: random.wholeNum(tailLength + 5, 49)
				},
				tail: {
					color,
					width,
					radius,
					height: tailLength
				}
			};
		},
		wild: () => {
			return {
				leaf: {
					color,
					width,
					radius,
					height: random.wholeNum(tailLength + 5, 49)
				},
				tail: {
					color,
					width: random.halfNum(0, width),
					radius: random.radius(),
					height: tailLength
				}
			};
		}
	};
};

const randomCell = (color1, color2) => {
	return {
		tame: () => {
			const borderWidth = random.wholeNum(1, 12);
			const borderRadius = 50;
			return {
				outer: {
					borderWidth,
					borderColor: color1,
					borderOpacity: 1,
					borderRadius,
					bgColor: 'rgb(0,0,0)',
					bgOpacity: 0,
					shadowThickness: random.wholeNum(0, 80),
					shadowBlur: random.wholeNum(0, 2),
					shadowOpacity: 0.85,
					shadowColor: lightenColor(color1, 100)
				},
				center: {
					borderWidth,
					borderColor: color1,
					borderOpacity: 1,
					borderRadius,
					bgColor: color2,
					bgOpacity: 1,
					shadowThickness: 0,
					shadowBlur: 0,
					shadowOpacity: 0,
					shadowColor: color1
				}
			};
		},
		wild: () => {
			const borderWidth = random.wholeNum(2, 50);
			const borderRadius = random.wholeNum(0, 1) ? 0 : 50;
			const shadowThickness = random.wholeNum(0, 80);
			const shadowColor = random.color();
			const shadowBlur = random.wholeNum(0, 10);
			const shadowOpacity = random.opacity();
			const baseOuter = {
				borderWidth,
				borderOpacity: 1,
				borderRadius,
				bgColor: 'rgb(0,0,0)',
				bgOpacity: 0,
				shadowThickness,
				shadowBlur,
				shadowOpacity,
				shadowColor
			};
			return {
				edges: {
					...baseOuter,
					borderColor: color1
				},
				corners: {
					...baseOuter,
					borderColor: random.color()
				},
				center: {
					...baseOuter,
					borderColor: color1,
					bgColor: color2,
					bgOpacity: random.opacity()
				}
			};
		}
	};
};

const spreadCells = (names, cellStyles, currentStyles) => {
	return names.reduce((a, v) => {
		a[v] = { ...currentStyles.clockCells[v], ...cellStyles };
		return a;
	}, {});
};

const randomPin = color => {
	const length = random.halfNum(5, 20);
	const width = random.halfNum(0, 2) || 0.5;
	const basePin = {
		length,
		color,
		width,
		gap: random.halfNum(width, width + 0.5),
		offset: 0,
		innerRadius: random.radius(),
		outerRadius: 0
	};
	return {
		tame: () => {
			return { ...basePin };
		},
		wild: () => {
			return {
				...basePin,
				offset: random.halfNum(0, length),
				outerRadius: random.radius()
			};
		}
	};
};

const pushPins = (pinStyles, maxPins = 3) => {
	return {
		tame: () => {
			return ['top', 'left', 'right', 'bottom'].reduce((a, v) => {
				a[v] = [];
				const numPins = random.wholeNum(0, maxPins);
				if (['top', 'bottom'].includes(v)) {
					for (let i = 0; i < numPins; i++) {
						a[v].push(pinStyles);
					}
				}
				return a;
			}, {});
		},
		wild: () => {
			return ['top', 'left', 'right', 'bottom'].reduce((a, v) => {
				a[v] = [];
				const numPins = ['top', 'bottom'].includes(v)
					? random.wholeNum(1, maxPins)
					: random.wholeNum(0, 1);
				for (let i = 0; i < numPins; i++) {
					if (v === 'top') a[v].push(pinStyles[0]);
					if (v === 'bottom') a[v].push(pinStyles[1]);
					if (v === 'left' || v === 'right') a[v].push(pinStyles[2]);
				}
				return a;
			}, {});
		}
	};
};

export const randomizer = currentStyles => {
	return {
		tame: () => {
			const color1 = random.color();
			const color2 = random.color();
			const color3a = random.color();
			const color3b = lightenColor(color3a);
			const color4 = random.color();
			const hrHandWidth = random.tenthNum(2, 4);
			const mnHandWidth = random.tenthNum(0, hrHandWidth) || 0.2;
			const { outer, center } = randomCell(color1, color2).tame();

			const { leaf: hrLeaf, tail: hrTail } = randomHand(
				color3a,
				hrHandWidth
			).tame();
			const { leaf: mnLeaf, tail: mnTail } = randomHand(
				color3b,
				mnHandWidth
			).tame();
			const { leaf: scLeaf, tail: scTail } = randomHand(color4, 0.2).tame();

			const pin = randomPin(color1).tame();

			return {
				...currentStyles,
				clockHands: { ...enableHands() },
				hrHand: {
					leaf: {
						...currentStyles.hrHand.leaf,
						...hrLeaf
					},
					tail: {
						...currentStyles.hrHand.tail,
						...hrTail
					}
				},
				mnHand: {
					leaf: {
						...currentStyles.mnHand.leaf,
						...mnLeaf
					},
					tail: {
						...currentStyles.mnHand.tail,
						...mnTail
					}
				},
				scHand: {
					leaf: {
						...currentStyles.scHand.leaf,
						...scLeaf
					},
					tail: {
						...currentStyles.scHand.tail,
						...scTail
					}
				},
				clockCap: {
					...currentStyles.clockCap,
					inner: {
						...currentStyles.clockCap.inner,
						...randomCap(mnHandWidth)
					}
				},
				clockCells: {
					...spreadCells(CELLS.OUTER, outer, currentStyles),
					center: { ...currentStyles.clockCells.center, ...center }
				},
				defaultPin: { ...pin },
				clockPins: { ...pushPins(pin).tame() }
			};
		},
		wild: () => {
			const color1 = random.color();
			const color2 = random.color();
			const color3a = random.color();
			const color3b = lightenColor(color3a);
			const color4 = random.color();
			const hrHandWidth = random.tenthNum(2, 4);
			const mnHandWidth = random.tenthNum(0, hrHandWidth) || 0.2;
			const { edges, corners, center } = randomCell(color1, color2).wild();

			const { leaf: hrLeaf, tail: hrTail } = randomHand(
				color3a,
				hrHandWidth
			).wild();
			const { leaf: mnLeaf, tail: mnTail } = randomHand(
				color3b,
				mnHandWidth
			).wild();
			const { leaf: scLeaf, tail: scTail } = randomHand(
				color4,
				random.tenthNum(0, 2) || 0.1
			).wild();

			const pin1 = randomPin(color1).wild();
			const pin2 = randomPin(color1).wild();
			const pin3 = randomPin(color1).wild();

			return {
				...currentStyles,
				clockHands: { ...enableHands() },
				hrHand: {
					leaf: {
						...currentStyles.hrHand.leaf,
						...hrLeaf
					},
					tail: {
						...currentStyles.hrHand.tail,
						...hrTail
					}
				},
				mnHand: {
					leaf: {
						...currentStyles.mnHand.leaf,
						...mnLeaf
					},
					tail: {
						...currentStyles.mnHand.tail,
						...mnTail
					}
				},
				scHand: {
					leaf: {
						...currentStyles.scHand.leaf,
						...scLeaf
					},
					tail: {
						...currentStyles.scHand.tail,
						...scTail
					}
				},
				clockCap: {
					outer: {
						...currentStyles.clockCap.outer,
						...randomCap(random.halfNum(0, 19))
					},
					inner: {
						...currentStyles.clockCap.inner,
						...randomCap(mnHandWidth)
					}
				},
				clockCells: {
					...spreadCells(CELLS.EDGES, edges, currentStyles),
					...spreadCells(CELLS.CORNERS, corners, currentStyles),
					center: { ...currentStyles.clockCells.center, ...center }
				},
				defaultPin: { ...pin2 },
				clockPins: {
					...pushPins([pin1, pin2, pin3]).wild()
				}
			};
		},
		dope: () => {},
		reset: () => {
			return { ...defaultStyles };
		}
	};
};
