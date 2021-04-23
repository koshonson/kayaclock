import { lightenColor, randomRgbColor } from '../../util';

export const getCanvasBg = style => {
	const { bgColorPrimary: PRIMARY, bgColorSecondary: SECONDARY } = style;
	return {
		background: `linear-gradient(90deg, ${PRIMARY} 0%, ${SECONDARY} 50%, ${PRIMARY} 100%)`,
		transition: 'all 1s'
	};
};

export const canvasBgStyler = () => {
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

export const getRandomBg = (mode = 'calm') => {
	if (mode === 'calm') {
		const color = randomRgbColor();
		return {
			bgColorPrimary: color,
			bgColorSecondary: lightenColor(color)
		};
	}
	if (mode === 'wild') {
		return {
			bgColorPrimary: randomRgbColor(),
			bgColorSecondary: randomRgbColor()
		};
	}
};
