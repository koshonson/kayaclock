import React from 'react';
import { toDecimals } from '../../util';

import RandomButton from '../menu/buttons/RandomButton';

const Input = ({
	label,
	display,
	style,
	className,
	randomize,
	decimals,
	type,
	...props
}) => {
	const renderRandomBtn = () => {
		if (type === 'checkbox') return <></>;
		return (
			<RandomButton
				size="8"
				randomize={randomize}
				style={{ marginLeft: '4px' }}
				yShift="-250"
			/>
		);
	};

	return (
		<div className="input-block" style={style}>
			<div style={{ display: 'flex', userSelect: 'none' }}>
				<label>
					{label}{' '}
					<span>
						{display ? `(${toDecimals(props.value, decimals)})` : ''}
					</span>
				</label>
				{renderRandomBtn()}
			</div>
			<input type={type} className={className} {...props}></input>
		</div>
	);
};

export default Input;
