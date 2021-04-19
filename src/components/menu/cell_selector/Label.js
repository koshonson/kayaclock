import React from 'react';
import { cellSelectorReferences } from '../../../styles';

const Label = ({ label }) => {
	const { getCellSelectorLabel } = cellSelectorReferences();

	return (
		<div className="cell-selector-display">
			Editing <strong>{getCellSelectorLabel(label)}</strong>.
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
