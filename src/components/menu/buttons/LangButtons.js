import React, { Fragment } from 'react';

import { CzechFlag, UkFlag } from '../../../styles/icons';
import LangButton from './LangButton';

const LangButtons = () => {
	return (
		<Fragment>
			<LangButton className="czech-flag" type="cs">
				<CzechFlag />
			</LangButton>
			<LangButton className="uk-flag" type="en">
				<UkFlag />
			</LangButton>
		</Fragment>
	);
};

export default LangButtons;
