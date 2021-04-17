import { useState, useEffect } from 'react';
import { useKeyWatch } from './useKeyWatch';
import { CELLS } from './cellSelectorConfig';

const { OUTER, EDGES, CORNERS, DEFAULT_MODE } = CELLS;
const DEFAULT_HIGHLIGHTED = { cells: [], mode: '' };
const DEFAULT_SELECTED = { cells: [DEFAULT_MODE], mode: DEFAULT_MODE };

export const useCellSelectorCells = () => {
	const [hovered, setHovered] = useState(null);
	const [highlighted, setHighlighted] = useState(DEFAULT_HIGHLIGHTED);
	const [selected, setSelected] = useState(DEFAULT_SELECTED);
	const { ctrl, shift } = useKeyWatch();

	useEffect(() => {
		if (!hovered) {
			setHighlighted(DEFAULT_HIGHLIGHTED);
			return;
		}
		if (ctrl || hovered === 'center') {
			setHighlighted({ mode: hovered, cells: [hovered] });
		} else {
			if (shift) {
				if (EDGES.some(v => v === hovered)) {
					setHighlighted({ mode: 'edges', cells: [...EDGES] });
				} else {
					setHighlighted({ mode: 'corners', cells: [...CORNERS] });
				}
			} else {
				setHighlighted({ mode: 'outer', cells: [...OUTER] });
			}
		}
	}, [hovered, ctrl, shift]);

	const getCellState = code => {
		if (highlighted.cells.some(value => value === code)) return 'highlighted';
		if (selected.cells.some(value => value === code)) return 'selected';
		return null;
	};

	const selectCells = code => {
		if (code !== hovered) return;
		setSelected({ ...highlighted });
	};

	return {
		setHovered,
		getCellState,
		selectCells,
		mode: selected.mode
	};
};
