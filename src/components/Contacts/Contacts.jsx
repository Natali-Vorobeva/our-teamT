import tel from '../../assets/images/tel.svg'
import emailImg from '../../assets/images/email.svg'

import './Contacts.scss';

function Contacts({ email, phone }) {

	return (
		<div className="contacts">
			<p className="contacts__phone">
				<img src={tel} alt="" className="contacts__img" />{phone}
			</p>
			<p className="contacts__email">
				<img src={emailImg} alt="" className="contacts__img" />{email}
			</p>
		</div>
	);
}

export default Contacts;