import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthFalse } from '../../store/auth/authSlice';
import exit from '../../assets/images/exit.svg'
import back from '../../assets/images/back.svg'
import Button from '../Button/Button';

import './Header.scss';

function Header({ children, handleSignOut, buttonVisible, onClick, width }) {

	const navigate = useNavigate();
	const dispatch = useDispatch()
	function handleSignOut() {
		dispatch(setAuthFalse())
		localStorage.removeItem('our-team');
		localStorage.removeItem('staff')
		navigate('/signup', { replace: true });
	}

	return (
		<header className="header">
			<div className="header__container">
				{
					width > 1000 ?
						<Button onClick={onClick} className={`button__header header__back ${buttonVisible}`} btnText="Назад" />
						:
						<div onClick={onClick} className={`header__back ${buttonVisible}`}>
							<img src={back} alt="Назад" />
						</div>
				}

				<div className="header__content">
					{children}
				</div>
				{
					width > 1000 ?
						<Button path="/signup" onClick={handleSignOut} className="button__header" btnText="Выход" />
						:
						<div onClick={handleSignOut} className="header__exit">
							<img src={exit} alt="Выход" />
						</div>
				}
			</div>

		</header>
	);
}

export default Header;
