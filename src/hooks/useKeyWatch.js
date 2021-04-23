import { useState, useEffect } from 'react';

export const useKeyWatch = () => {
	const [ctrlPressed, setCtrlPressed] = useState(false);
	const [shiftPressed, setShiftPressed] = useState(false);

	useEffect(() => {
		const onKeyDown = ({ ctrlKey, shiftKey }) => {
			if (ctrlKey) setCtrlPressed(true);
			if (shiftKey) setShiftPressed(true);
		};

		const onKeyUp = () => {
			setCtrlPressed(false);
			setShiftPressed(false);
		};

		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('keyup', onKeyUp);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('keyup', onKeyUp);
		};
	}, [setCtrlPressed, setShiftPressed]);

	return { ctrl: ctrlPressed, shift: shiftPressed };
};
