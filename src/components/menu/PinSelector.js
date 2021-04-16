import React, { Fragment } from 'react';
import { CELLS, usePinSelector } from '../../hooks';

import Cell from './CellSelectorCell';

const PinSelector = () => {
	const { setHovered, getCellState, selectCells, mode } = usePinSelector();

	const renderCells = () => {
		return CELLS.ALL.map(code => {
			const active = CELLS.EDGES.includes(code);
			return (
				<Cell
					code={code}
					key={`csCell-${code}`}
					active={active}
					setHovered={setHovered}
					cellState={getCellState(code)}
					selectCells={active ? selectCells : () => {}}
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

export default PinSelector;
