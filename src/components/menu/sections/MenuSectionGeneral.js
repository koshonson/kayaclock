import React, { useContext } from 'react';
import { styleContext } from '../../../context';
import { clockHandToggler, canvasBgStyler, getRandomBg } from '../../../styles';

import MenuSection from './MenuSection';
import RandomButton from '../buttons/RandomButton';
import ColorGradient from '../../generic/ColorGradient';
import HandToggler from '../buttons/HandToggler';

const MenuSectionGeneral = ({ title, type }) => {
	const { style, setStyle } = useContext(styleContext);
	const toggleHand = clockHandToggler(style);
	const setCanvasBg = canvasBgStyler(style);
	const { bgColorPrimary, bgColorSecondary, clockHands } = style;

	return (
		<MenuSection title={title} type={type}>
			<div className="menu-section-content-block ai-fe">
				<ColorGradient
					label="Background"
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
			<label className="menu-section-content-label">Clock Hands</label>
			<HandToggler
				setStyle={setStyle}
				toggleHand={toggleHand}
				handState={clockHands}
			/>
		</MenuSection>
	);
};

export default MenuSectionGeneral;
