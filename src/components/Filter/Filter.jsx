import './Filter.scss';

function Filter({ onClick, items }) {

	return (
		<div className="filter">
			Показать по:
			<ul className="filter__items">
				{
					items.map((item) => (
						<li key={item} onClick={() => onClick(item)} className="filter__item">{item}</li>
					))
				}
			</ul>
		</div>
	);
}

export default Filter;
