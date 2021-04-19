import React from 'react';

const Input = ({ label, display, style, className, ...props }) => {
	return (
		<div className="input-block" style={style}>
			<label>
				{label} {display ? `(${props.value})` : ''}
			</label>
			<input className={className} {...props}></input>
		</div>
	);
};

export default Input;
