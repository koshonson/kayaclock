const randomNum = (from, to) => {
	return from + Math.floor(Math.random() * (to - from + 1));
};

export const get16BitNum = (from = 0, to = 255) => {
	return randomNum(from, to);
};
