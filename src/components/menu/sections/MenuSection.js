import '../../../styles/input.css';
import React, { useContext } from 'react';
import { menuContext } from '../../../context';

import Button from '../../generic/Button';
import { ArrowIcon } from '../../../styles/icons';
import RandomButton from '../buttons/RandomButton';

const MenuSection = ({ children, title, type, randomize }) => {
	const { expanded, setExpanded } = useContext(menuContext);
	const collapsed = expanded !== type;

	const renderRandomBtn = () => {
		if (!randomize || expanded !== type) return <></>;
		return (
			<RandomButton
				randomize={randomize}
				size="11"
				style={{ margin: '0 0 .25vmin .5vmin' }}
				yShift="-50"
			/>
		);
	};

	return (
		<div className="menu-section">
			<div className="menu-section-heading" onClick={() => setExpanded(type)}>
				<div style={{ display: 'flex' }}>
					<div style={{ userSelect: 'none' }}>{title}</div>
					{renderRandomBtn()}
				</div>
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
