import React from 'react';
import { cellSelectorReferences, LABELS } from '../../../styles';
import RandomButton from '../buttons/RandomButton';

const Label = ({ label, lang, randomize }) => {
	const { getCellSelectorLabel } = cellSelectorReferences();
	const {
		sections: {
			cells: {
				selector: { keyHints, selection }
			}
		}
	} = LABELS;
	const {
		ctrl: { [lang]: ch },
		shift: { [lang]: sh }
	} = keyHints;

	return (
		<div className="cell-selector-display">
			<div style={{ display: 'flex', userSelect: 'none' }}>
				{selection.edit[lang] + ' '}
				<span style={{ paddingLeft: '3px' }}>
					{getCellSelectorLabel(label, lang)}
				</span>
				.
				<RandomButton
					size="10"
					randomize={randomize}
					style={{ marginLeft: '4px' }}
					yShift="-150"
				/>
			</div>
			<div className="cell-selector-display-info">
				{sh[0]} <span>{sh[1]}</span> {sh[2]} <span>{sh[3]}</span> {sh[4]}.
			</div>
			<div className="cell-selector-display-info">
				{ch[0]} <span>{ch[1]}</span> {ch[2]} <span>{ch[3]}</span> {ch[4]}.
			</div>
		</div>
	);
};

export default Label;
