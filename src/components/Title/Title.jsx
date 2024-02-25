import Header from '../Header/Header';
import './Title.scss';

function Title({ title, subtitle, width }) {
	return (
		<Header width={width}>
			<h1 className="title">{title}</h1>
			<p className="title__subtitle">{subtitle}</p>
		</Header>
	);
}

export default Title;