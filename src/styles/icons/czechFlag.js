import React from 'react';

export const CzechFlag = () => {
	return (
		<svg
			style={{ borderRadius: '5px' }}
			height="2.25vmin"
			viewBox="0 0 512 512"
			width="2.25vmin"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g>
				<path
					d="M 0,512 250,256 0,0 Z"
					style={{
						fill: '#0052b4',
						stroke: 'none',
						strokeWidth: '1px',
						strokeLinecap: 'butt',
						strokeLinejoin: 'miter',
						strokeOpacity: 1,
						fillOpacity: 1
					}}
				/>
				<path
					d="M 250,256 H 512 V 512 H 0 Z"
					style={{
						fill: '#d80027',
						stroke: 'none',
						strokeWidth: '1px',
						strokeLinecap: 'butt',
						strokeLinejoin: 'miter',
						strokeOpacity: 1,
						fillOpacity: 1
					}}
				/>
				<path
					d="M 250,256 H 512 V 0 H 0 Z"
					style={{
						fill: '#f0f0f0',
						stroke: 'none',
						strokeWidth: '1px',
						strokeLinecap: 'butt',
						strokeLinejoin: 'miter',
						strokeOpacity: 1,
						fillOpacity: 1
					}}
				/>
			</g>
		</svg>
	);
};
