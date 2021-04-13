import { combineColorTransparency as colComb } from '../../util';

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
		shadowOffset: offset
	} = options;

	const brdCol = colComb(borderColor, borderOpacity);
	const bgCol = colComb(bgColor, bgOpacity);
	const shdCol1 = colComb(shadowColor, shadowOpacity);
	const shdCol2 = colComb(shadowColor, shadowOpacity + 0.2);

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
		boxShadow: [boxShadow1, boxShadow2]
	};
};
