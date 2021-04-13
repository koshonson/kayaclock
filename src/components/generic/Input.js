import React from 'react';

const Input = ({ label, display, ...props }) => {
	return (
		<div className="input-block">
			<label>
				{label} {display ? `(${props.value})` : ''}
			</label>
			<input {...props}></input>
		</div>
	);
};

export default Input;
