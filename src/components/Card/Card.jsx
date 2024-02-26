import { useState } from 'react';
import Favourites from '../Favourites/Favourites';
import { setLike } from '../../store/auth/authSlice';
import { useDispatch } from 'react-redux';
import './Card.scss';

if (process.env.NODE_ENV !== 'production') {
	const envPublicUrl = process.env.PUBLIC_URL;
	console.log('Код запущен в режиме разработки', envPublicUrl);
} else {
	console.log('Код запущен в production');
}

function Card({ src, firstName, lastName, onClick, ...item }) {
	let srcImg = src.startsWith('http')
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
			<div className="card__img">
				<img className="card__image" src={srcImg ? src : `${process.env.PUBLIC_URL}${src}`} alt="Фотография сотрудника" />
				{/* Рабочий src */}
				{/* <img className="card__image" src={srcImg ? src : `http://localhost:5173/our-teamT${src}`} alt="Фотография сотрудника" /> */}
			</div>
			<div className="card__name">{firstName} {lastName}</div>
			<div onClick={(e) => {
				stopPropagation(e)
				toggleLike(item.id)
			}} className="card__favorite">

				<Favourites
					stateLike={item.liked}
					item={item} />
			</div>
		</div>
	);
}

export default Card;