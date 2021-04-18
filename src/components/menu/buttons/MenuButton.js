import React, { useContext } from 'react';
import { styleContext } from '../../../context';
import { getContrastBaseColor as contrastColor } from '../../../util';

import Button from '../../generic/Button';
import { MenuIcon } from '../../../styles/icons';

const MenuButton = ({ toggleMenu }) => {
	const {
		style: { bgColorPrimary: bgColor }
	} = useContext(styleContext);

	return (
		<Button
			content={<MenuIcon fill={contrastColor(bgColor)} />}
			className="menu-btn"
			onClick={toggleMenu}
		/>
	);
};

export default MenuButton;
