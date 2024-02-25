const getIsAuth = state => state.auth.isAuth
const getUser = state => state.auth.user
const getUsers = state => state.auth.users
const getErrorEmail = state => state.auth.errorEmail

export const authSelectors = {
	getUsers,
	getIsAuth,
	getUser,
	getErrorEmail
}