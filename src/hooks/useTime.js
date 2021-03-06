import { useState, useEffect } from 'react';

export const useTime = () => {
	const [time, setTime] = useState(new Date());
	const [mnRotation, setMnRotation] = useState(0);
	const [hrRotation, setHrRotation] = useState(0);
	const [scRotation, setScRotation] = useState(0);

	useEffect(() => {
		const [hr, mn, sc] = [time.getHours(), time.getMinutes(), time.getSeconds()];
		setHrRotation(hr * 30 + mn * 0.5);
		setMnRotation(mn * 6);
		setScRotation(sc * 6);
		const timeout = setTimeout(() => {
			setTime(new Date(time.setSeconds(time.getSeconds() + 1)));
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, [time]);

	return {
		hr: hrRotation,
		mn: mnRotation,
		sc: scRotation
	};
};
