import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import useToken from '../../utils/useToken'

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.isAuth = action.payload
		},
		setUsers: (state, action) => {
			state.users = action.payload
		},
		setUser: (state, action) => {
			state.user = action.payload
			const emailUser = state.users.find(user => {
				return user.email == state.user.email
			})

			if (emailUser === undefined) {
				const newUser = {
					// ...el,
					id: state.users.length + 1,

					email: state.user.email,
					first_name: state.user.username,
					last_name: '',
					position: 'Партнер',
					avatar: 'https://avatars.mds.yandex.net/i?id=62101709e1a17f775a750ee2b03ab3b18bbd8170-3451557-images-thumbs&ref=rim&n=33&w=196&h=200',
					morePartOne: '',
					morePartTwo: '',
					morePartThree: '',
				}
				state.users.unshift(newUser)
				useToken()
				state.isAuth = true
			} else {
				state.errorEmail = 'Введите другой адрес эл. почты. Такой адрес уже зарегистрирован'
			}
		},
		setLike: (state, action) => {
			const id = action.payload
			const obj = state.users.find(f=>f.id == id)
			if(obj) obj.liked = !obj.liked
		},		
		setResetErrorEmail: (state, action) => {
			state.errorEmail = ''
		},
	},
})

export const { setAuth, setUser, setUsers, setResetErrorEmail, setLike } = authSlice.actions

export default authSlice.reducer