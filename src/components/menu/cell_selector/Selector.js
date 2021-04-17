import React, { Fragment } from 'react';
import { CELLS, useCellSelectorCells } from '../../../hooks';

import Cell from './Cell';

const Selector = () => {
	const { setHovered, getCellState, selectCells, mode } = useCellSelectorCells();

	const renderCells = () => {
		return CELLS.ALL.map(code => {
			return (
				<Cell
					code={code}
					key={`csCell-${code}`}
					active={true}
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

export default Selector;
