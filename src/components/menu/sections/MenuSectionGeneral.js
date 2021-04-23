import React, { useContext } from 'react';
import { styleContext, menuContext } from '../../../context';
import {
	clockHandToggler,
	canvasBgStyler,
	getRandomBg,
	LABELS
} from '../../../styles';

import MenuSection from './MenuSection';
import RandomButton from '../buttons/RandomButton';
import ColorGradient from '../../generic/ColorGradient';
import HandToggler from '../buttons/HandToggler';
import Randomizer from '../buttons/Randomizer';

const MenuSectionGeneral = ({ title, type }) => {
	const { lang } = useContext(menuContext);
	const { style, setStyle } = useContext(styleContext);
	const toggleHand = clockHandToggler(style);
	const setCanvasBg = canvasBgStyler(style);
	const { bgColorPrimary, bgColorSecondary, clockHands } = style;
	const { blocks: labels } = LABELS.sections.general;

	return (
		<MenuSection title={title} type={type}>
			<div className="menu-section-content-block ai-fe">
				<ColorGradient
					label={labels.bg[lang]}
					colors={{ bgColorPrimary, bgColorSecondary }}
					setStyle={setStyle}
					setCanvasBg={setCanvasBg}
				/>
				<RandomButton
					randomize={getRandomBg}
					size="15"
					style={{ margin: '0 0 .5vmin 1vmin' }}
					yShift="-50"
				/>
			</div>
			<label className="menu-section-content-label">
				{labels.clockHands[lang]}
			</label>
			<HandToggler
				setStyle={setStyle}
				toggleHand={toggleHand}
				handState={clockHands}
			/>
			<label className="menu-section-content-label">
				{labels.randomize[lang]}
			</label>
			<div className="menu-section-content-block ai-fe">
				<Randomizer
					className="randomizer-btn randomizer-btn-tame"
					type="tame"
					label={labels.randomize.modes.tame[lang]}
				/>
				<Randomizer
					className="randomizer-btn randomizer-btn-wild"
					type="wild"
					label={labels.randomize.modes.wild[lang]}
				/>
				<Randomizer
					className="randomizer-btn randomizer-btn-dope"
					type="dope"
					label={labels.randomize.modes.dope[lang]}
				/>
				<Randomizer
					className="randomizer-btn randomizer-btn-reset"
					type="reset"
					label={labels.randomize.modes.reset[lang]}
				/>
			</div>
		</MenuSection>
	);
};

export default MenuSectionGeneral;
