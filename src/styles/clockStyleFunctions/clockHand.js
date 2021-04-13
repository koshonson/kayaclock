import { defaultStyles } from './defaultStyles';

export const getClockHandStyle = ({ style, type, rotation }) => {
	const options = style[type];
	const { leaf, tail } = options;
	const { color: L_color, width: L_w, height: L_h, zIndex: L_zIndex } = leaf;
	const { color: T_color, width: T_w, height: T_h, zIndex: T_zIndex } = tail;
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
			transform: `rotate(${rotation}deg)`
		}
	};
};

export const setClockHandStyle = (
	{ type, scope, styles },
	currentStyles = defaultStyles
) => {
	const newStyles = {};
	newStyles[type] = {};
	switch (scope) {
		case 'leaf':
			newStyles[type].leaf = { ...currentStyles[type].leaf, ...styles };
			newStyles[type].tail = currentStyles[type].tail;
			break;
		case 'tail':
			newStyles[type].leaf = currentStyles[type].leaf;
			newStyles[type].tail = { ...currentStyles[type].tail, ...styles };
			break;
		case 'full':
			newStyles[type].leaf = { ...currentStyles[type].leaf, ...styles };
			newStyles[type].tail = { ...currentStyles[type].tail, ...styles };
			break;
		default:
			break;
	}
	return newStyles;
};
