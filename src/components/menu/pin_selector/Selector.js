import React, { Fragment, useContext } from 'react';
import { menuContext } from '../../../context';
import { CELLS, useCellSelectorPins } from '../../../hooks';

import Cell from '../cell_selector/Cell';

const Selector = () => {
	const { changeMode } = useContext(menuContext);
	const { setHovered, getCellState, selectCells } = useCellSelectorPins(
		changeMode
	);

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
		</Fragment>
	);
};

export default Selector;
