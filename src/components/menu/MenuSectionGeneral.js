import React, { useContext } from 'react';
import MenuSection from './MenuSection';
import { styleContext } from '../../context/styleContext';

const MenuSectionGeneral = ({ title, type }) => {
	const { setStyle } = useContext(styleContext);

	return (
		<MenuSection title={title} type={type}>
			<label>Background</label>
			<input
				type="color"
				onChange={e => setStyle({ bgColor: e.target.value })}
			></input>
		</MenuSection>
	);
};

export default MenuSectionGeneral;
