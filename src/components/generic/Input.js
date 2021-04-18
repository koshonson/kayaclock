import React from 'react';

const Input = ({ label, display, className, ...props }) => {
	return (
		<div className="input-block">
			<label>
				{label} {display ? `(${props.value})` : ''}
			</label>
			<input className={className} {...props}></input>
		</div>
	);
};

export default Input;
