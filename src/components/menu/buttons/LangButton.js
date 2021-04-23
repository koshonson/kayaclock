import React, { useContext } from 'react';
import { menuContext } from '../../../context';

const LangButton = ({ type, className, children }) => {
	const { lang, setLang } = useContext(menuContext);

	const getStyle = () => {
		if (type !== lang) return { filter: 'grayscale(1)' };
		return { transform: 'scale(1.1)' };
	};

	return (
		<div
			className={`flag ${className}`}
			style={getStyle()}
			onClick={() => setLang(type)}
		>
			{children}
		</div>
	);
};

export default LangButton;
