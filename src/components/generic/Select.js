import React from 'react';

const Select = ({ style, className, label, ...props }) => {
	return (
		<div className="input-block" style={style}>
			<label>{label}</label>
			<select className={className} {...props}>
				<option value="null">none</option>
				<option value="hr">Hour Hand</option>
				<option value="mn">Minute Hand</option>
				<option value="sc">Second Hand</option>
			</select>
		</div>
	);
};

export default Select;
