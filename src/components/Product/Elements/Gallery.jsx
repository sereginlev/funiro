import React from 'react';

import styles from 'scss/modules/Product/Elements/Gallery.module.scss';

function Gallery(item) {
	const [image, setImage] = React.useState(null);

	React.useEffect(() => {
		setImage(item.images[0]);
	}, [item])

	return (
		<div className={styles.gallery}>
			<div className={styles.image}>
				<img src={image} alt={item.description} />
			</div>

			<ul className={styles.list}>
				{
					item.images.map((img, index) => (
						<li className={styles.item} key={index} onMouseEnter={() => setImage(img)}>
							<img src={img} alt='Other image of product' />
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Gallery;
