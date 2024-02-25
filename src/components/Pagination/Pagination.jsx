import './Pagination.scss';

function Pagination({ staffPerPage, totalStaff, paginate }) {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalStaff / staffPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<ul className="pagination">
			{
				pageNumbers.map(number => (
					<li className="pagination__page-item" key={number}>
						<a
							onClick={() => paginate(number)} href="#" className="pagination__page-item-link">
							{number}
						</a>
					</li>
				))
			}
		</ul>
	);
}

export default Pagination;