import React, { Fragment } from 'react';
import { CELLS, useCellSelector } from '../../hooks';

import Cell from './CellSelectorCell';

const CellSelector = () => {
	const { setHovered, getCellState, selectCells, mode } = useCellSelector();

	const renderCells = () => {
		return CELLS.ALL.map(code => {
			return (
				<Cell
					code={code}
					key={`csCell-${code}`}
					setHovered={setHovered}
					cellState={getCellState(code)}
					selectCells={selectCells}
				/>
			);
		});
	};

	return (
		<Fragment>
			<div className="cell-selector">{renderCells()}</div>
			<div>{mode}</div>
		</Fragment>
	);
};

export default CellSelector;
