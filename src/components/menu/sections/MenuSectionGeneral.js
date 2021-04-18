import React, { useContext } from 'react';
import { styleContext } from '../../../context';
import { clockHandToggler, canvasBgStyler } from '../../../styles';

import MenuSection from './MenuSection';
import ColorGradient from '../../generic/ColorGradient';

const MenuSectionGeneral = ({ title, type }) => {
	const { style, setStyle } = useContext(styleContext);
	const toggleHand = clockHandToggler(style);
	const setCanvasBg = canvasBgStyler(style);
	const { bgColorPrimary, bgColorSecondary } = style;

	return (
		<MenuSection title={title} type={type}>
			<ColorGradient
				label="Background"
				colors={{ bgColorPrimary, bgColorSecondary }}
				setStyle={setStyle}
				setCanvasBg={setCanvasBg}
			/>
			<div style={{ display: 'flex' }}>
				<button onClick={() => setStyle(toggleHand.hr())}>Hour Hand</button>
				<button onClick={() => setStyle(toggleHand.mn())}>
					Minute Hand
				</button>
				<button onClick={() => setStyle(toggleHand.sc())}>
					Second Hand
				</button>
			</div>
		</MenuSection>
	);
};

export default MenuSectionGeneral;
