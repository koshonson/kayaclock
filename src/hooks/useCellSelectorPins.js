import { useState, useEffect } from 'react';
import { useKeyWatch } from './useKeyWatch';
import { CELLS } from './cellSelectorConfig';

const { EDGES } = CELLS;
const DEFAULT_HIGHLIGHTED = { cells: [], mode: '' };
const DEFAULT_SELECTED = { cells: [...EDGES], mode: 'batch' };

export const useCellSelectorPins = changeMode => {
	const [hovered, setHovered] = useState(null);
	const [highlighted, setHighlighted] = useState(DEFAULT_HIGHLIGHTED);
	const [selected, setSelected] = useState(DEFAULT_SELECTED);
	const { shift } = useKeyWatch();

	useEffect(() => {
		if (!hovered || !EDGES.includes(hovered)) {
			setHighlighted(DEFAULT_HIGHLIGHTED);
			return;
		}
		if (shift) {
			setHighlighted({ mode: 'batch', cells: [...EDGES] });
		} else {
			setHighlighted({ mode: hovered, cells: [hovered] });
		}
	}, [hovered, shift]);

	const getCellState = code => {
		if (highlighted.cells.some(value => value === code)) return 'highlighted';
		if (selected.cells.some(value => value === code)) return 'selected';
		return null;
	};

	const selectCells = code => {
		if (code !== hovered) return;
		setSelected({ ...highlighted });
		changeMode.cellPin({ mode: highlighted.mode });
	};

	return {
		setHovered,
		getCellState,
		selectCells
	};
};
