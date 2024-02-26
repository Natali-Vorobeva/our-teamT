import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux';
import Form from '../../components/Form/Form';
import { authSelectors } from '../../store/auth/authSelectors'

import './FormPage.scss';

function FormPage({ errorEmail }) {

	const isAuth = useSelector(authSelectors.getIsAuth)
	const navigate = useNavigate();
	
	useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

	return (
		<div className="form-page">
				<Form errorEmail={errorEmail} />
		</div >
	);
}

export default FormPage;