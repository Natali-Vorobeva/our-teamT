import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Gallery from '../../components/Gallery/Gallery';
import Title from '../../components/Title/Title';
import Popup from '../../components/Popup/Popup';
import Pagination from '../../components/Pagination/Pagination';
import Filter from '../../components/Filter/Filter';
import { authSelectors } from '../../store/auth/authSelectors'
import './OurTeamPage.scss';

function OurTeamPage({ width }) {
	const getUsers = useSelector(authSelectors.getUsers)
	const [firstNameEmployee, setFirstNameEmployee] = useState('')
	const [lastNameEmployee, setLastNameEmployee] = useState('')
	const [positionEmployee, setPositionEmployee] = useState('')
	const [imageEmployee, setImageEmployee] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [buttonVisible, setButtonVisible] = useState('')
	const [more, setMore] = useState({
		morePartOne: '',
		morePartTwo: '',
		morePartThree: ''
	})

	/* Состояние popup */
	const [popup, setPopup] = useState(true)

	/* Пагинация */
	const [currentPage, setCurrentPage] = useState(1)
	const [staffPerPage, setStaffPerPage] = useState(16)
	const lastEmployeeIndex = currentPage * staffPerPage
	const firstEmployeeIndex = lastEmployeeIndex - staffPerPage
	const currentStaff = getUsers.slice(firstEmployeeIndex, lastEmployeeIndex)
	const paginate = pageNumber => setCurrentPage(pageNumber)

	/* Фильтр карточек */
	const items = [4, 8, 16, 'Показать все']
	function handleClickFilter(item) {
		setStaffPerPage(item == 'Показать все' ? getUsers.length : item)
	}
	
	function popupClose() {
		setPopup(true)
	}

	function handleClickCard(item) {
		setFirstNameEmployee(item.first_name)
		setLastNameEmployee(item.last_name)
		setPositionEmployee(item.position)
		setImageEmployee(item.avatar)
		setPhone(item.tel)
		setMore({
			morePartOne: item.morePartOne,
			morePartTwo: item.morePartTwo,
			morePartThree: item.morePartThree
		})
		setEmail(item.email)
		setButtonVisible("visible")
		setPopup(false)
	}
	return (
		<div className="our-team">
			{
				popup ?
					<>
						<div className="our-team__header">
							<Title
								width={width} title="Наша команда" subtitle="Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций." />
						</div>
						<div className="our-team__gallery">
							<Gallery
								onClick={handleClickFilter}
								items={items}
								getUsers={getUsers}
								staffPerPage={staffPerPage}
								totalStaff={getUsers.length}
								paginate={paginate}>
								{
									currentStaff.map((item) => {
										return (
											<Card
												onClick={handleClickCard}
												key={item.id}
												src={item.avatar}
												firstName={item.first_name}
												lastName={item.last_name}
												{...item} />
										)

									})
								}
							</Gallery >
						</div>
						<div className="our-team__pagination">
							<Pagination
								staffPerPage={staffPerPage}
								totalStaff={getUsers.length}
								paginate={paginate}
							/>
							<Filter
								items={items}
								onClick={handleClickFilter} />
						</div>
					</>
					:
					<Popup
						width={width}
						firstNameEmployee={firstNameEmployee}
						lastNameEmployee={lastNameEmployee}
						imageEmployee={imageEmployee}
						positionEmployee={positionEmployee}
						phone={phone}
						more={more}
						email={email}
						buttonVisible={buttonVisible}
						onClick={popupClose}
					/>
			}
		</div>
	);
}

export default OurTeamPage;
