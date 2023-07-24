import React from 'react';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/Home/Cart/Elements/Mid/Image.module.scss';

type ImageProps = {
	index: number;
	id: number;
	category: string;
	description: string;
	price: number;
	specs: string;
	texture: string;
	weight: string;
	size: string;
	count: number;
	sale?: number;
	isNew?: boolean;
}

const Image: React.FC<ImageProps> = ({ index, ...item }) => {
	const { images } = useAppSelector(state => state.images);

	return (
		<>
			{
				images &&
				<div className={styles.image}>
					<img className={styles.item} src={images[item.id - 1][0]} alt={item.description} />
				</div>
			}
		</>

	)
}

export default Image;
