import React, { useContext, Fragment } from 'react';
import { menuContext } from '../../../context';
import { CELLS, useCellSelectorCells } from '../../../hooks';

import Cell from './Cell';

const Selector = () => {
	const { changeMode } = useContext(menuContext);
	const { setHovered, getCellState, selectCells } = useCellSelectorCells(
		changeMode
	);

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
		</Fragment>
	);
};

export default Selector;
