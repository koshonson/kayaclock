import React from 'react';
import { cellSelectorReferences } from '../../../styles';
import RandomButton from '../buttons/RandomButton';

const Label = ({ label, randomize }) => {
	const { getCellSelectorLabel } = cellSelectorReferences();

	return (
		<div className="cell-selector-display">
			<div style={{ display: 'flex', userSelect: 'none' }}>
				Editing{' '}
				<span style={{ paddingLeft: '3px' }}>
					{getCellSelectorLabel(label)}
				</span>
				.
				<RandomButton
					size="10"
					randomize={randomize}
					style={{ marginLeft: '4px' }}
					yShift="-150"
				/>
			</div>
			<div className="cell-selector-display-info">
				Press <span>SHIFT key</span> to select <span>edge/corner</span>{' '}
				cells.
			</div>
			<div className="cell-selector-display-info">
				Press <span>CTRL key</span> to select a <span>single</span> cell.
			</div>
		</div>
	);
};

export default Label;
