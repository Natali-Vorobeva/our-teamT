import { useEffect, useState } from 'react';
import NoInformation from '../NoInformation/NoInformation';

import './Text.scss';

function Text({ more }) {

	const { morePartOne, morePartTwo, morePartThree } = more
	const [text, setText] = useState(true)
	useEffect(() => {
		morePartOne == '' ? setText(false) : setText(true)
	}, [])

	return (
		<>
			{
				text
					?
					<div className="text">
						<p className="text__part">{morePartOne}</p>
						<p className="text__part">{morePartTwo}</p>
						<p className="text__part">{morePartThree}</p>
					</div >
					:
					<NoInformation />
			}
		</>
	);
}

export default Text;
