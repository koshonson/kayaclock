import React, { useContext } from 'react';
import { menuContext } from '../../../context';

import Button from '../../generic/Button';
import { ArrowIcon } from '../../../styles/icons';

const MenuSection = ({ children, title, type }) => {
	const { expanded, setExpanded } = useContext(menuContext);
	const collapsed = expanded !== type;

	return (
		<div className="menu-section">
			<div className="menu-section-heading" onClick={() => setExpanded(type)}>
				<div>{title}</div>
				<Button
					content={<ArrowIcon rotation="180" />}
					className={`menu-section-collapse-btn ${
						!collapsed ? 'open' : 'closed'
					}`}
				/>
			</div>
			<div
				className={`menu-section-content ${!collapsed ? 'open' : 'closed'}`}
			>
				{children}
			</div>
		</div>
	);
};

export default MenuSection;
