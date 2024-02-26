import { useState } from 'react';import openEye from '../../assets/images/eye.png'
import closeEye from '../../assets/images/EyeClose.svg'

import './Input.scss';

function Input({ 
	id, 
	name, 
	label, 
	placeholder,
	className, 
	value, 
	onChange, 
	type, 
	visible,
	minLength,
	maxLength
 }) {

	const [eyeState, setEyeState] = useState(false)
	const [inputType, setInputType] = useState(type)

	function toggleEye() {
		setEyeState(!eyeState)
		inputType == type ? setInputType('text') : setInputType(type)
	}

	return (
		<div className="input">
			<label className="input__label">{label}</label>
			<input
				autoComplete="off"
				id={id}
				value={value}
				name={name}
				type={inputType}
				onChange={onChange}
				required
				minLength={minLength}
				maxLength={maxLength}
				placeholder={placeholder} className={`input__input ${className}`} />
			{
				visible && <img onClick={toggleEye} className="input__img" src={eyeState ? openEye : closeEye} alt="Видимость пароля" />
			}
		</div>
	);
}

export default Input;