import { useState } from 'react';
import Favourites from '../Favourites/Favourites';
import './Card.scss';
import { setLike } from '../../store/auth/authSlice';
import { useDispatch } from 'react-redux';

function Card({ src, firstName, lastName, onClick, ...item }) {

	const [stateLike, setStateLike] = useState(false)

	const dispatch = useDispatch()

	function stopPropagation(e) {
		e.stopPropagation()
	}

	function toggleLike(id) {	
		dispatch(setLike(id))
		setStateLike(!stateLike)
	}

	function handleClick(item) {
		onClick(item)
	}

	return (
		<div onClick={(e) => {
			stopPropagation(e)
			handleClick(item)
		}} className="card">
			<img className="card__image" src={src} alt="Фотография сотрудника" />
			<div className="card__name">{firstName} {lastName}</div>
			<div onClick={(e) => {
				stopPropagation(e)
				toggleLike(item.id)
			}} className="card__favorite">

				<Favourites 
				stateLike={item.liked}
				// stateLike={stateLike} 
				item={item} />
			</div>
		</div>
	);
}

export default Card;