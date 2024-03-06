import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import useToken from '../../utils/useToken'
import staff from '../../constants/constants'

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthTrue: (state, action) => {
			state.isAuth = true
			state.users = JSON.parse(localStorage.getItem('staff'))
		},
		setAuthFalse: (state, action) => {
			state.isAuth = false
			state.users = []
		},
		setUser: (state, action) => {
			state.users = staff
			state.user = action.payload
			const emailUser = state.users.find(user => {
				return user.email == state.user.email
			})

			if (emailUser === undefined) {
				const newUser = {
					id: state.users.length + 1,
					email: state.user.email,
					first_name: state.user.username,
					last_name: '',
					position: 'Партнер',
					avatar: 'https://avatars.mds.yandex.net/i?id=62101709e1a17f775a750ee2b03ab3b18bbd8170-3451557-images-thumbs&ref=rim&n=33&w=196&h=200',
					morePartOne: '',
					morePartTwo: '',
					morePartThree: '',
					liked: false,
					tel: "Номер телефона не указан",
				}
				state.users.push(newUser)
				localStorage.setItem('staff', JSON.stringify(state.users))
				useToken()
				state.isAuth = true
			} else {
				state.errorEmail = 'Введите другой адрес эл. почты. Такой адрес уже зарегистрирован'
			}
		},
		setLike: (state, action) => {
			const id = action.payload
			state.users = JSON.parse(localStorage.getItem('staff'))
			const obj = state.users.find(f => f.id == id)
			if (obj) obj.liked = !obj.liked
			localStorage.setItem('staff', JSON.stringify(state.users))
		},
		setResetErrorEmail: (state, action) => {
			state.errorEmail = ''
		},
	},
})

export const { setAuthTrue, setAuthFalse, setUser, setUsers, setResetErrorEmail, setLike } = authSlice.actions

export default authSlice.reducer