import { randomRgbColor } from './color';

const randomNum = (from, to) => {
	return from + Math.floor(Math.random() * (to - from + 1));
};

const randomNumHalf = (from, to) => {
	return (randomNum(from, to * 2) * 5) / 10;
};

const randomNumTenth = (from, to) => {
	const offset = randomNum(0, (to - from) * 10) / 10;
	return from + offset;
};

const randomNumFiveFold = (from, to) => {
	return randomNum(from, to / 5) * 5;
};

const randomNumTenFold = (from, to) => {
	const offset = randomNum(0, (to - from) / 10) * 10;
	return from + offset;
};

const randomNumHalfTenth = (from = 0, to = 1) => {
	return (randomNum(from, to * 20) * 5) / 100;
};

const randomBool = () => {
	return !!randomNum(0, 1);
};

export const get16BitNum = (from = 0, to = 255) => {
	return randomNum(from, to);
};

export const random = {
	bool: () => randomBool(),
	wholeNum: (from, to) => randomNum(from, to),
	halfNum: (from, to) => randomNumHalf(from, to),
	tenthNum: (from, to) => randomNumTenth(from, to),
	halfTenthNum: (from, to) => randomNumHalfTenth(from, to),
	fiveFold: (from, to) => randomNumFiveFold(from, to),
	radius: () => randomNum(0, 50),
	color: () => randomRgbColor(),
	opacity: () => randomNumHalfTenth(0, 1),
	zInxCap: () => randomNumTenFold(5, 35)
};
