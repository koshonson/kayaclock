export const getClockBoardStyle = ({ clockBoardSize }) => {
	return {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		width: `${clockBoardSize}vmin`,
		height: `${clockBoardSize}vmin`
	};
};

const toggle = num => (num === 0 ? 1 : 0);

const setVisibleClockHands = (type, currentStyles) => {
	const newStyles = currentStyles.clockHands;
	newStyles[type] = toggle(newStyles[type]);
	return newStyles;
};

export const clockHandToggler = currentStyles => {
	const settings = currentStyles.clockHands;
	return {
		hr: () => setVisibleClockHands('hr', currentStyles),
		mn: () => setVisibleClockHands('mn', currentStyles),
		sc: () => setVisibleClockHands('sc', currentStyles)
	};
};
