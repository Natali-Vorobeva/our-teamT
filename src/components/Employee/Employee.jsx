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

	return (
		<Header width={width} onClick={onClick} buttonVisible={buttonVisible} handleSignOut={handleSignOut} >
			<section className="employee">
				<div className="employee__avatar">
					<img className="employee__img" src={avatar} alt="Аватар" />
				</div>
				<div className="employee__info">
					<h3 className="employee__name">{firstNameEmployee} {lastNameEmployee}</h3>
					<p className="employee__position">{position}</p>
				</div>
			</section>
		</Header>

	);
}

export default Employee;