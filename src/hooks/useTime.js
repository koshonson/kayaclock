import { useState, useRef, useEffect } from 'react';

export const useTime = () => {
	const [time, setTime] = useState(new Date());
	const [mnRotation, setMnRotation] = useState(0);

	const hrHandLeaf = useRef(0);
	const hrHandTail = useRef(0);
	// const mnHandLeaf = useRef(0);
	// const mnHandTail = useRef(0);
	const scHandLeaf = useRef(0);
	const scHandTail = useRef(0);

	useEffect(() => {
		const [hr, mn, sc] = [time.getHours(), time.getMinutes(), time.getSeconds()];
		hrHandLeaf.current.style.transform = `rotate(${hr * 15}deg)`;
		hrHandTail.current.style.transform = `rotate(${hr * 15}deg)`;
		// mnHandLeaf.current.style.transform = `rotate(${mn * 6}deg)`;
		// mnHandTail.current.style.transform = `rotate(${mn * 6}deg)`;
		setMnRotation(mn * 6);
		scHandLeaf.current.style.transform = `rotate(${sc * 6}deg)`;
		scHandTail.current.style.transform = `rotate(${sc * 6}deg)`;
		const timeout = setTimeout(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, [time]);

	return {
		hrHandLeaf,
		hrHandTail,
		mnRotation,
		scHandLeaf,
		scHandTail
	};
};
