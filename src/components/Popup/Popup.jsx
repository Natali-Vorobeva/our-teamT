import Contacts from '../Contacts/Contacts';
import Employee from '../Employee/Employee';
import Text from '../Text/Text';

import './Popup.scss';

function Popup({
	firstNameEmployee,
	lastNameEmployee,
	imageEmployee,
	positionEmployee,
	email,
	more,
	buttonVisible,
	onClick,
	width,
	phone
}) {

	return (
		<div className="popup">
			<Employee
				width={width}
				firstNameEmployee={firstNameEmployee}
				lastNameEmployee={lastNameEmployee}
				position={positionEmployee}
				avatar={imageEmployee}
				buttonVisible={buttonVisible}
				onClick={onClick}
			/>
			<div className="popup__content">

				<Text more={more} />

				<Contacts phone={phone} email={email} />
				
			</div>

		</div>
	);
}

export default Popup;