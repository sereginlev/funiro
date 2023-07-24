import React from 'react';

import styles from 'scss/modules/Home/Products/Elements/Item.module.scss';

import Info from 'components/Home/Products/Elements/Info';
import Badge from 'components/Home/Products/Elements/Badge';

type ItemProps = {
	images: string[];
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
}

const Item: React.FC<ItemProps> = ({ images, ...product }) => {	

	return (
		<li className={styles.item}>
			{
				images &&
				<div className={styles.block}>
					<img className={styles.image} src={images[0]} alt={product.description} />
				</div>
			}

			<Info {...product} />

			<Badge {...product} />
		</li>
	)
}

export default Item;
