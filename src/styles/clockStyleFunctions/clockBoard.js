export const getClockBoardStyle = ({ clockBoardSize }) => {
	return {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		width: `${clockBoardSize}vmin`,
		height: `${clockBoardSize}vmin`
	};
};
