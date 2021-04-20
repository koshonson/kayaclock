export const defaultStyles = {
	bgColorPrimary: 'rgb(249, 249, 249)',
	bgColorSecondary: 'rgb(230, 230, 225)',
	clockBoardSize: 80,
	clockHands: {
		hr: 1,
		mn: 1,
		sc: 1
	},
	hrHand: {
		leaf: {
			color: 'rgb(200, 20, 20)',
			width: 1.8,
			height: 23,
			zIndex: 10,
			radius: 0
		},
		tail: {
			color: 'rgb(200, 20, 20)',
			width: 1.8,
			height: 5,
			zIndex: 10,
			radius: 0
		}
	},
	mnHand: {
		leaf: {
			color: 'rgb(210, 40, 40)',
			width: 2,
			height: 35,
			zIndex: 20,
			radius: 0
		},
		tail: {
			color: 'rgb(210, 40, 40)',
			width: 2,
			height: 4,
			zIndex: 20,
			radius: 0
		}
	},
	scHand: {
		leaf: {
			color: 'rgb(180,100,100)',
			width: 0.2,
			height: 13,
			zIndex: 30,
			radius: 0
		},
		tail: {
			color: 'rgb(180,100,100)',
			width: 0.2,
			height: 2.5,
			zIndex: 30,
			radius: 0
		}
	},
	clockCap: {
		inner: {
			color: 'rgb(180,100,100)',
			size: 1,
			radius: 25,
			zIndex: 35,
			snap: 'sc',
			rotation: true
		},
		outer: {
			color: 'rgb(255, 0, 0)',
			size: 0,
			radius: 50,
			zIndex: 15,
			snap: null,
			rotation: false
		}
	},
	clockCells: {
		topLeft: {
			borderWidth: 7,
			borderColor: 'rgb(0,0,0)',
			borderOpacity: 1,
			borderRadius: 50,
			bgColor: 'rgb(255,255,255)',
			bgOpacity: 0,
			shadowThickness: 15,
			shadowBlur: 1,
			shadowOpacity: 0.5,
			shadowColor: 'rgb(0,0,0)',
			shadowOffset: 0,
			zIndex: 1
		},
		top: {
			borderWidth: 7,
			borderColor: 'rgb(0,0,0)',
			borderOpacity: 1,
			borderRadius: 50,
			bgColor: 'rgb(255,255,255)',
			bgOpacity: 0,
			shadowThickness: 15,
			shadowBlur: 1,
			shadowOpacity: 0.5,
			shadowColor: 'rgb(0,0,0)',
			shadowOffset: 2,
			zIndex: 2
		},
		topRight: {
			borderWidth: 7,
			borderColor: 'rgb(0,0,0)',
			borderOpacity: 1,
			borderRadius: 50,
			bgColor: 'rgb(255,255,255)',
			bgOpacity: 0,
			shadowThickness: 15,
			shadowBlur: 1,
			shadowOpacity: 0.5,
			shadowColor: 'rgb(0,0,0)',
			shadowOffset: 0,
			zIndex: 1
		},
		left: {
			borderWidth: 7,
			borderColor: 'rgb(0,0,0)',
			borderOpacity: 1,
			borderRadius: 50,
			bgColor: 'rgb(255,255,255)',
			bgOpacity: 0,
			shadowThickness: 15,
			shadowBlur: 1,
			shadowOpacity: 0.5,
			shadowColor: 'rgb(0,0,0)',
			shadowOffset: 2,
			zIndex: 2
		},
		center: {
			borderWidth: 7,
			borderColor: 'rgb(0,0,0)',
			borderOpacity: 1,
			borderRadius: 50,
			bgColor: 'rgb(0,0,0)',
			bgOpacity: 0.9,
			shadowThickness: 0,
			shadowBlur: 0,
			shadowOpacity: 0,
			shadowColor: 'rgb(0,0,0)',
			shadowOffset: 0,
			zIndex: 3
		},
		right: {
			borderWidth: 7,
			borderColor: 'rgb(0,0,0)',
			borderOpacity: 1,
			borderRadius: 50,
			bgColor: 'rgb(255,255,255)',
			bgOpacity: 0,
			shadowThickness: 15,
			shadowBlur: 1,
			shadowOpacity: 0.5,
			shadowColor: 'rgb(0,0,0)',
			shadowOffset: 2,
			zIndex: 2
		},
		bottomLeft: {
			borderWidth: 7,
			borderColor: 'rgb(0,0,0)',
			borderOpacity: 1,
			borderRadius: 50,
			bgColor: 'rgb(255,255,255)',
			bgOpacity: 0,
			shadowThickness: 15,
			shadowBlur: 1,
			shadowOpacity: 0.5,
			shadowColor: 'rgb(0,0,0)',
			shadowOffset: 0,
			zIndex: 1
		},
		bottom: {
			borderWidth: 7,
			borderColor: 'rgb(0,0,0)',
			borderOpacity: 1,
			borderRadius: 50,
			bgColor: 'rgb(255,255,255)',
			bgOpacity: 0,
			shadowThickness: 15,
			shadowBlur: 1,
			shadowOpacity: 0.5,
			shadowColor: 'rgb(0,0,0)',
			shadowOffset: 2,
			zIndex: 2
		},
		bottomRight: {
			borderWidth: 7,
			borderColor: 'rgb(0,0,0)',
			borderOpacity: 1,
			borderRadius: 50,
			bgColor: 'rgb(255,255,255)',
			bgOpacity: 0,
			shadowThickness: 15,
			shadowBlur: 1,
			shadowOpacity: 0.5,
			shadowColor: 'rgb(0,0,0)',
			shadowOffset: 0,
			zIndex: 1
		}
	},
	defaultPin: {
		color: 'rgb(0,0,0)',
		width: 1,
		length: 10,
		gap: 1,
		offset: 0,
		innerRadius: 0,
		outerRadius: 0
	},
	clockPins: {
		top: [
			{
				color: 'rgb(0,0,0)',
				width: 1,
				length: 10,
				gap: 1,
				offset: 0,
				innerRadius: 0,
				outerRadius: 0
			},
			{
				color: 'rgb(0,0,0)',
				width: 1,
				length: 10,
				gap: 1,
				offset: 0,
				innerRadius: 0,
				outerRadius: 0
			}
		],
		left: [],
		right: [],
		bottom: [
			{
				color: 'rgb(0,0,0)',
				width: 1,
				length: 10,
				gap: 1,
				offset: 0,
				innerRadius: 0,
				outerRadius: 0
			}
		]
	}
};
