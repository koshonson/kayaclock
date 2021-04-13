import React, { useContext } from 'react';
import { styleContext } from '../../context/styleContext';
import { getClockCellStyle } from '../../styles/clockStyleFunctions';

const ClockCell = ({ type, children }) => {
	const { style } = useContext(styleContext);

	return <div style={getClockCellStyle({ style, type })}>{children}</div>;
};

export default ClockCell;
