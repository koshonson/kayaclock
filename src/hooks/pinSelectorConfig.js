export const PINS = {
	VERTICAL: {
		cells: ['top', 'bottom'],
		names: {
			1: { 0: 'center' },
			2: { 0: 'left', 1: 'right' },
			3: { 0: 'left', 1: 'center', 2: 'right' }
		}
	},
	HORIZONTAL: {
		cells: ['left', 'right'],
		names: {
			1: { 0: 'center' },
			2: { 0: 'upper', 1: 'lower' },
			3: { 0: 'upper', 1: 'center', 2: 'lower' }
		}
	}
};
