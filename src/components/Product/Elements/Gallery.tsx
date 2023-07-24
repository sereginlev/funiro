import React from 'react';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/Product/Elements/Gallery.module.scss';

type GalleryProps = {
	index: number;
	id: number;
	category: string;
	description: string;
	price: number;
	specs: string;
	texture: string;
	weight: string;
	size: string;
	count?: number;
	sale?: number;
	isNew?: boolean;
	images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ index, ...product }) => {
	const [image, setImage] = React.useState('');

	const { images } = useAppSelector(state => state.images);

	React.useEffect(() => {
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
