import { useState, useEffect } from 'react';
import { useKeyWatch } from './useKeyWatch';
import { PINS } from './pinSelectorConfig';
import { spreadIdx } from '../util';

const { VERTICAL: V, HORIZONTAL: H } = PINS;
const EMPTY = { pins: [], mode: '' };

const getPinName = ({ type, idx, numPins }) => {
	const pinNames = type === 'top' || type === 'bottom' ? V : H;
	return pinNames.names[numPins][idx];
};

export const usePinSelector = ({ numPins, type }) => {
	const [hovered, setHovered] = useState(null);
	const [highlighted, setHighlighted] = useState(EMPTY);
	const [selected, setSelected] = useState({
		mode: 'batch',
		pins: spreadIdx(numPins)
	});
	const { ctrl, shift } = useKeyWatch();

	useEffect(() => {
		if (hovered === null) {
			setHighlighted(EMPTY);
			return;
		}
		if (shift) {
			setHighlighted({ mode: 'batch', pins: spreadIdx(numPins) });
		} else {
			setHighlighted({
				mode: getPinName({ numPins, type, idx: hovered }),
				pins: [hovered]
			});
		}
	}, [hovered, shift, ctrl]);

	useEffect(() => {
		setSelected({
			mode: 'batch',
			pins: spreadIdx(numPins)
		});
	}, [numPins]);

	const getPinState = idx => {
		if (highlighted.pins.includes(idx)) return 'highlighted';
		if (selected.pins.includes(idx)) return 'selected';
		return null;
	};

	const selectPins = code => {
		if (code !== hovered) return;
		setSelected({ ...highlighted });
	};

	return {
		setHovered,
		getPinState,
		selectPins,
		mode: selected.mode
	};
};
