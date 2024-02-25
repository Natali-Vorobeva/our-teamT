import './Gallery.scss';

function Gallery({
	children
}) {

	return (
		<section className="gallery">
				<div className="gallery__content">
					{children}
				</div>
		</section>
	);
}

export default Gallery;