import like from '../../assets/images/like.svg'
import dislike from '../../assets/images/dislike.svg'
import './Favourites.scss';

function Favourites({ stateLike, item }) {	

return (
<img  className="favorites" src={stateLike ? like : dislike}  />
);
}

export default Favourites;