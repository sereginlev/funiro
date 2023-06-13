import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Product/Elements/Gallery.module.scss';

function Gallery({index, ...product }) {
	const [image, setImage] = React.useState(null);

	const { images } = useSelector(state => state.images);

	React.useEffect(() => {
		// setImage(item.images[0]);
		images && setImage(images[index][0]);
	}, [product.images, index])

	return (
		<div className={styles.gallery}>
			<div className={styles.image}>
				<img src={image} alt={product.description} />
			</div>

			<ul className={styles.list}>
				{
					images[index].map((img, index) => (
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
