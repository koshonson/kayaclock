import { combineColorTransparency as colComb, random } from '../../util';
import { LABELS } from './localization';

const OPTIONS = [
	'borderWidth',
	'borderColor',
	'borderOpacity',
	'borderRadius',
	'bgColor',
	'bgOpacity',
	'shadowThickness',
	'shadowColor',
	'shadowOpacity',
	'shadowBlur',
	'shadowOffset'
];

const placeShadowsByType = ({ type, thickness, blur, color, offset, inset }) => {
	const COEFFS = {
		topLeft: [1, 1],
		top: [0, 1],
		topRight: [-1, 1],
		left: [1, 0],
		center: [0, 0],
		right: [-1, 0],
		bottomLeft: [1, -1],
		bottom: [0, -1],
		bottomRight: [-1, -1]
	};
	const [x, y] = COEFFS[type];
	const _inset = inset ? 'inset ' : '';
	// prettier-ignore
	return `${_inset}${thickness * x}px ${thickness * y}px ${blur}px ${offset}px ${color}`;
};

export const getClockCellStyle = ({ style, type }) => {
	const options = style.clockCells[type];
	const {
		borderWidth,
		borderColor,
		borderOpacity,
		borderRadius,
		bgColor,
		bgOpacity,
		shadowThickness: thickness,
		shadowColor,
		shadowOpacity,
		shadowBlur: blur,
		shadowOffset: offset,
		zIndex
	} = options;

	const brdCol = colComb(borderColor, borderOpacity);
	const bgCol = colComb(bgColor, bgOpacity);
	const shdCol1 = colComb(shadowColor, shadowOpacity);
	const shdCol2 = colComb(shadowColor, +shadowOpacity + 0.2);

	const boxShadow1 = placeShadowsByType({
		type,
		thickness,
		blur,
		color: shdCol1,
		offset,
		inset: true
	});

	const boxShadow2 = placeShadowsByType({
		type,
		thickness: thickness / 4,
		blur,
		color: shdCol2,
		offset: 0,
		inset: false
	});

	return {
		position: 'relative',
		border: `${borderWidth}px solid ${brdCol}`,
		borderRadius: `${borderRadius}%`,
		backgroundColor: bgCol,
		boxShadow: [boxShadow1, boxShadow2],
		zIndex
	};
};

const randomizeCell = () => {
	return {
		borderWidth: random.wholeNum(0, 80),
		borderColor: random.color(),
		borderOpacity: random.opacity(),
		borderRadius: random.radius(),
		bgColor: random.color(),
		bgOpacity: random.opacity(),
		shadowThickness: random.wholeNum(0, 80),
		shadowBlur: random.wholeNum(0, 50),
		shadowOpacity: random.opacity(),
		shadowColor: random.color()
	};
};

const setClockCellStyle = ({ type, styles }, currentStyles) => {
	const newStyles = { ...currentStyles.clockCells };
	newStyles[type] = { ...newStyles[type], ...styles };
	return { clockCells: { ...newStyles } };
};

const singleCellStyler = (type, currentStyles) => {
	const styler = OPTIONS.reduce((a, v) => {
		a[v] = value => {
			return setClockCellStyle(
				{ type, styles: { [v]: value } },
				currentStyles
			);
		};
		return a;
	}, {});
	styler.random = () => {
		return setClockCellStyle({ type, styles: randomizeCell() }, currentStyles);
	};

	return styler;
};

const multiCellStyler = (types, currentStyles) => {
	const styler = OPTIONS.reduce((a, v) => {
		a[v] = value => {
			return types.reduce(
				(finalStyles, type) => {
					return setClockCellStyle(
						{ type, styles: { [v]: value } },
						finalStyles
					);
				},
				{ ...currentStyles }
			);
		};
		return a;
	}, {});
	styler.random = () => {
		const styles = randomizeCell();
		return types.reduce(
			(finalStyles, type) => {
				return setClockCellStyle({ type, styles }, finalStyles);
			},
			{ ...currentStyles }
		);
	};
	return styler;
};

export const clockCellStyler = (type, currentStyles) => {
	const CORNERS = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
	const EDGES = ['top', 'left', 'right', 'bottom'];

	switch (type) {
		case 'corners':
			return multiCellStyler(CORNERS, currentStyles);
		case 'edges':
			return multiCellStyler(EDGES, currentStyles);
		case 'outer':
			return multiCellStyler([...EDGES, ...CORNERS], currentStyles);
		default:
			return singleCellStyler(type, currentStyles);
	}
};

const getReferenceCell = type => {
	const REFERENCES = {
		corners: 'topLeft',
		edges: 'top',
		outer: 'topLeft'
	};
	return REFERENCES[type] ? REFERENCES[type] : type;
};

const formatCellSelectorType = (type, lang) => {
	const { names: labels } = LABELS.sections.cells;
	return labels[type][lang];
};

const getCellSelectorLabel = (type, lang) => {
	const { prefix, suffix } = LABELS.sections.cells.selector.selection;
	const label = formatCellSelectorType(type, lang);
	switch (type) {
		case 'corners':
		case 'edges':
		case 'outer':
			return `${prefix.many[lang]} ${label} ${suffix.many[lang]}`;
		default:
			return `${prefix.one[lang]} ${label} ${suffix.one[lang]}`;
	}
};

export const cellSelectorReferences = () => {
	return {
		getCellSelectorLabel,
		getReferenceCell,
		randomizeCell
	};
};
