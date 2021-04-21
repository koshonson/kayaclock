export const spreadIdx = num => {
	const idxs = [];
	for (let i = 0; i < num; i++) {
		idxs.push(i);
	}
	return idxs;
};

export const toDecimals = (num, decimals = 0) => {
	return Number(num).toFixed(+decimals);
};
