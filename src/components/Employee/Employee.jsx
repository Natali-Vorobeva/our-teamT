import { useEffect, useState } from 'react';
import Header from '../Header/Header';

import './Employee.scss';

function Employee({
	position,
	avatar,
	firstNameEmployee,
	lastNameEmployee,
	handleSignOut,
	buttonVisible,
	onClick,
	width
}) {

	const [styleName, setStyleName] = useState('')
	const [stylePOsition, setStylePOsition] = useState('')
	let srcImg = avatar.startsWith('http')

	useEffect(() => {
		if (firstNameEmployee.length > 20) {
			setStyleName('font-size')
			setStylePOsition('font-size-position')
		}
	}, [])

	return (
		<Header width={width} onClick={onClick} buttonVisible={buttonVisible} handleSignOut={handleSignOut} >
			<section className="employee">
				<div className="employee__avatar">
					<img className="employee__img" src={srcImg ? avatar : `https://raw.githubusercontent.com/Natali-Vorobeva/our-teamT/main/public/images${avatar}`} alt="Аватар" />
				</div>
				<div className="employee__info">
					<div className={`employee__name ${styleName}`}>{firstNameEmployee} {lastNameEmployee}</div>
					<p className={`employee__position ${stylePOsition}`}>{position}</p>
				</div>
			</section>
		</Header>
	);
}

export default Employee;
