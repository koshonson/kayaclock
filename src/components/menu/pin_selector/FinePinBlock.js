import React from 'react';
import { LABELS } from '../../../styles';

import Box from '../../generic/Box';
import DetailCell from '../pin_selector/DetailCell';
import Controller from '../pin_selector/Controller';
import RandomButton from '../buttons/RandomButton';

const {
	cells: { names: cellNames },
	pins: { selector, controller }
} = LABELS.sections;
const { keyHints: kh } = selector;

const FinePinBlock = ({ mode, lang, pinLabel, randomize }) => {
	const lang3p = lang === 'cs' ? `${lang}3p` : lang;
	const langAdj = lang === 'cs' ? `${lang}Adj` : lang;
	const oneOrMany = pinLabel === 'all' ? 'many' : 'one';

	const renderDetailCell = () => {
		if (mode === 'batch') {
			return (
				<div className="cell-selector-display">
					<div style={{ display: 'flex', userSelect: 'none' }}>
						{selector.edit[lang] + ' '}
						<span style={{ padding: '0 3px' }}>
							{cellNames[pinLabel][lang]}
						</span>{' '}
						{selector.batchSuffix[lang]}.
						<RandomButton
							size="10"
							randomize={randomize}
							style={{ marginLeft: '4px' }}
							yShift="-150"
						/>
					</div>
					<Controller type={mode} label={controller[lang]} />
				</div>
			);
		} else {
			return (
				<div className="cell-selector-display">
					<div style={{ display: 'flex', userSelect: 'none' }}>
						{selector.edit[lang] + ' '}
						<span style={{ padding: '0 3px' }}>
							{cellNames[pinLabel][langAdj]}
						</span>{' '}
						{selector.cellMidtext[oneOrMany][lang]}
						<span style={{ padding: '0 3px' }}>
							{cellNames[mode][lang3p]}
						</span>{' '}
						{selector.cellSuffix[lang]}.
						<RandomButton
							size="10"
							randomize={randomize}
							style={{ marginLeft: '4px' }}
							yShift="-150"
						/>
					</div>
					<div style={{ display: 'flex', fontSize: '90%' }}>
						<Box size="6" style={{ flexShrink: 0 }}>
							<DetailCell mode={mode} />
						</Box>
						<Controller type={mode} label={controller[lang]} />
						<div
							className="cell-selector-display-info"
							style={{ marginLeft: '2vmin' }}
						>
							{kh[lang][0]} <span>{kh[lang][1]}</span>{' '}
							{kh[lang][2] + ' '}
							<span>{kh[lang][3]}</span> {kh[lang][4]}.
						</div>
					</div>
				</div>
			);
		}
	};

	return renderDetailCell();
};

export default FinePinBlock;
