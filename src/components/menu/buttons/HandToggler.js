import React from 'react';

const HandToggler = ({ setStyle, toggleHand, handState }) => {
	const { hr, mn, sc } = handState;
	const setFilter = state => {
		return state ? {} : { filter: 'invert(1)' };
	};

	return (
		<div className="menu-section-content-block ai-fe">
			<div
				style={setFilter(hr)}
				className="toggle-hand-btn"
				onClick={() => setStyle(toggleHand.hr())}
			>
				Hour Hand
			</div>
			<div
				style={setFilter(mn)}
				className="toggle-hand-btn"
				onClick={() => setStyle(toggleHand.mn())}
			>
				Minute Hand
			</div>
			<div
				style={setFilter(sc)}
				className="toggle-hand-btn"
				onClick={() => setStyle(toggleHand.sc())}
			>
				Second Hand
			</div>
		</div>
	);
};

export default HandToggler;
