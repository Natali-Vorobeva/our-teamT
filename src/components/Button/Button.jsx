// import { Link } from 'react-router-dom';
import './Button.scss';

function Button({ btnText, className, onSignOut, path, onClick }) {

	return (
		<button onClick={onClick} className={`button  ${className}`}>
			{btnText}
		</button>
	);
}

export default Button;