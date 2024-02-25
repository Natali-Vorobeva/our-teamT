import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../store/auth/authSlice';
import { authSelectors } from '../../store/auth/authSelectors'
import exit from '../../assets/images/exit.svg'
import back from '../../assets/images/back.svg'
import Button from '../Button/Button';
import './Header.scss';

function Header({ children, handleSignOut, buttonVisible, onClick, width }) {
	const navigate = useNavigate();
	const isAuth = useSelector(authSelectors.getIsAuth)
	const dispatch = useDispatch()
	function handleSignOut() {
		localStorage.removeItem('our-team');
		dispatch(setAuth(false))
		navigate('/signup', { replace: true });
		// setEmail('');
	}

	return (
		<header className="header">
			<div className="header__container">
				{
					width > 700 ?
					<Button onClick={onClick} className={`button__header header__back ${buttonVisible}`} btnText="Назад" />
					:
					<div onClick={onClick}  className={`header__back ${buttonVisible}`}>
							<img src={back} alt="Выход" />
						</div>
				}
				
				<div className="header__content">
					{children}
				</div>
				{
					width > 700 ?
						<Button path="/signup" onClick={handleSignOut} className="button__header" btnText="Выход" />
						:
						<div onClick={handleSignOut}  className="header__exit">
							<img src={exit} alt="Выход" />
						</div>

				}
			</div>

		</header>
	);
}

export default Header;