import { useNavigate } from 'react-router-dom';

import './NotFound.scss'

function NotFound() {

  const navigate = useNavigate();
  const handleBackNavigate = () => {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <div className="not-found__error">
        <p className="not-found__code">404</p>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <a className="not-found__link" onClick={handleBackNavigate}>Назад</a>
    </section>
  )
}
export default NotFound;