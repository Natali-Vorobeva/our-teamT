import './Text.scss';

function Text({ more }) {
	
	const { morePartOne, morePartTwo, morePartThree } = more

return (
<div className="text">
	<p className="text__part">{morePartOne}</p>
	<p className="text__part">{morePartTwo}</p>
	<p className="text__part">{morePartThree}</p>
</div>
);
}

export default Text;