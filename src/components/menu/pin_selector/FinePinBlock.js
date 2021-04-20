import React from 'react';

import Box from '../../generic/Box';
import DetailCell from '../pin_selector/DetailCell';
import Controller from '../pin_selector/Controller';

const FinePinBlock = ({ mode, pinLabel }) => {
	const renderDetailCell = () => {
		if (mode === 'batch') {
			return (
				<div className="cell-selector-display">
					Editing <span>all</span> pins in batch.
					<Controller type={mode} />
				</div>
			);
		} else {
			return (
				<div className="cell-selector-display">
					Editing <span>{pinLabel}</span> pin
					{pinLabel === 'all' ? 's' : ''} in the <span>{mode}</span> cell.
					<div style={{ display: 'flex', fontSize: '90%' }}>
						<Box size="6" style={{ flexShrink: 0 }}>
							<DetailCell mode={mode} />
						</Box>
						<Controller type={mode} />
						<div
							className="cell-selector-display-info"
							style={{ marginLeft: '2vmin' }}
						>
							Press <span>SHIFT key</span> to select{' '}
							<span>all pins</span> in batch.
						</div>
					</div>
				</div>
			);
		}
	};

	return renderDetailCell();
};

export default FinePinBlock;
