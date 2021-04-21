import React from 'react';

import Box from '../../generic/Box';
import DetailCell from '../pin_selector/DetailCell';
import Controller from '../pin_selector/Controller';
import RandomButton from '../buttons/RandomButton';

const FinePinBlock = ({ mode, pinLabel, randomize }) => {
	const renderDetailCell = () => {
		if (mode === 'batch') {
			return (
				<div className="cell-selector-display">
					<div style={{ display: 'flex', userSelect: 'none' }}>
						Editing <span style={{ padding: '0 3px' }}>all</span> pins in
						batch.
						<RandomButton
							size="10"
							randomize={randomize}
							style={{ marginLeft: '4px' }}
							yShift="-150"
						/>
					</div>
					<Controller type={mode} />
				</div>
			);
		} else {
			return (
				<div className="cell-selector-display">
					<div style={{ display: 'flex', userSelect: 'none' }}>
						Editing <span style={{ padding: '0 3px' }}>{pinLabel}</span>{' '}
						pin
						{pinLabel === 'all' ? 's' : ''} in the{' '}
						<span style={{ padding: '0 3px' }}>{mode}</span> cell.
						<RandomButton
							size="10"
							randomize={randomize}
							style={{ marginLeft: '4px' }}
							yShift="-150"
						/>
					</div>
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
