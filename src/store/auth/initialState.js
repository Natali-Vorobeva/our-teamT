export const initialState = {
	isAuth: false,
	users: [],
	user: {
		id: null,
		first_name: '',
		email: '',
		position: 'Партнер',
		avatar: 'https://avatars.mds.yandex.net/i?id=62101709e1a17f775a750ee2b03ab3b18bbd8170-3451557-images-thumbs&ref=rim&n=33&w=196&h=200',
		morePartOne: '',
		morePartTwo: '',
		morePartThree: '',
	},
	errorEmail: '',
	favorites: []
}
// liteShort



// export const initialState = {
//   user: null,
//   isAuth: false,

//   signInStatus: 'initial',
//   signInError: null,

//   signUpStatus: 'initial',
//   signUpError: null,

//   logOutStatus: 'initial',
//   logOutError: null,

//   userStatus: 'initial',
//   userError: null,
// }