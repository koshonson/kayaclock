import React from 'react';
import { LABELS } from '../../styles';

const noneLabel = { en: 'none', cs: 'žádné' };
const { hr, mn, sc } = LABELS.sections.hands;

const Select = ({ style, className, label, lang, ...props }) => {
	return (
		<div className="input-block" style={style}>
			<label>{label}</label>
			<select className={className} {...props}>
				<option value="null">{noneLabel[lang]}</option>
				<option value="hr">{hr[lang]}</option>
				<option value="mn">{mn[lang]}</option>
				<option value="sc">{sc[lang]}</option>
			</select>
		</div>
	);
};

export default Select;
