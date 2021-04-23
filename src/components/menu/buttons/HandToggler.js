import React, { useContext } from 'react';
import { menuContext } from '../../../context';
import { LABELS } from '../../../styles';

const HandToggler = ({ setStyle, toggleHand, handState }) => {
	const { lang } = useContext(menuContext);
	const { hands: labels } = LABELS.sections;
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
				{labels.hr[lang]}
			</div>
			<div
				style={setFilter(mn)}
				className="toggle-hand-btn"
				onClick={() => setStyle(toggleHand.mn())}
			>
				{labels.mn[lang]}
			</div>
			<div
				style={setFilter(sc)}
				className="toggle-hand-btn"
				onClick={() => setStyle(toggleHand.sc())}
			>
				{labels.sc[lang]}
			</div>
		</div>
	);
};

export default HandToggler;
