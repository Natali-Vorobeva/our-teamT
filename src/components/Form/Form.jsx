import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';

import { useForm } from '../../utils/useForm';
import { setUser, setResetErrorEmail } from '../../store/auth/authSlice';
import { authSelectors } from '../../store/auth/authSelectors'

import './Form.scss';

function Form() {

	const errorEmail = useSelector(authSelectors.getErrorEmail)
	const user = useSelector(authSelectors.getUser)
	const { handleChange, values, errors, isValid, setIsValid } = useForm()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (errorEmail !== '') {
			values.email = ''			
		}
	}, [errorEmail])

	useEffect(() => {
		if (values.email !== '') {
			dispatch(setResetErrorEmail())			
		}
	}, [values.email])

	
	useEffect(() => {
		if (values.password !== values.confirm_password) {
			setIsValid(false);
		}
	}, [values]);

	function handleSubmit(evt) {
		evt.preventDefault();
		dispatch(setUser({
			username: values.username,
			email: values.email,
			password: values.password,
		}))
		navigate('/');
	}

	return (
		<form
			action="#"
			noValidate
			onSubmit={handleSubmit}
			autoComplete="off"
			className="form">
			<div className="form__body">
				<h2 className="form__title">Регистрация</h2>
				<Input
					id="username" type="text" name="username"
					label="Имя" placeholder="Артур"
					value={values.username || ''}
					onChange={handleChange}
				/>
				<span className="form__input-error name-input-error form__input-error form__input-error_type_profile-name">{errors.username}</span>

				<Input
					className={`form__input ${errors.email && 'form__input_status_error'}`}
					id="email" type="email" name="email"
					value={values.email || ''}
					onChange={handleChange}
					label="Электронная почта" placeholder="example@mail.ru" />
				<span className="email-input-error form__input-error">{errors.email || errorEmail || ''}</span>


				<Input
					id="password" type="password" name="password"
					label="Пароль" placeholder="******" value={values.password || ''}
					onChange={handleChange}
					visible={true}
					minLength={6} maxLength={6}
				/>
				<span className="password-input-error form__input-error">{errors.password}</span>


				<Input
					id="confirm_password" type="password"
					name="confirm_password"
					onChange={handleChange}
					value={values.confirm_password || ''}
					visible={true}
					minLength={6} maxLength={6}
					label="Подтвердите пароль" placeholder="******" />
				<span className="password-input-error form__input-error">{errors.confirm_password}</span>

				<Button
					path="/"
					className={`button__form  ${isValid ? '' : 'button__form_disable'}`}
					type="submit" btnText="Зарегистрироваться" />
			</div>
		</form>
	);
}

export default Form;