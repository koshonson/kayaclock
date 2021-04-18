import { lightenColor } from '../../util';

export const getCanvasBg = style => {
	const { bgColorPrimary: PRIMARY, bgColorSecondary: SECONDARY } = style;
	return {
		background: `linear-gradient(90deg, ${PRIMARY} 0%, ${SECONDARY} 50%, ${PRIMARY} 100%)`
	};
};

export const canvasBgStyler = currentStyles => {
	return {
		primary: value => {
			return {
				bgColorPrimary: value,
				bgColorSecondary: lightenColor(value, 45)
			};
		},
		secondary: value => {
			return { bgColorSecondary: value };
		}
	};
};
