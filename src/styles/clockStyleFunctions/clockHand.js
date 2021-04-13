export const clockHand = ({ style, type, rotation }) => {
	const options = style[type];
	const { color: backgroundColor, width, height } = options;
	return {
		leaf: {
			bottom: '50%',
			left: `calc(50% - ${width / 2})`,
			width,
			height,
			backgroundColor,
			transform: `rotate(${rotation}deg)`
		},
		tail: {
			top: '50%',
			left: `calc(50% - ${width / 2})`,
			width,
			height,
			backgroundColor,
			transform: `rotate(${rotation}deg)`
		}
	};
};
